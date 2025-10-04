import MemberShip from '../models/membership.js'
import { Parser } from 'json2csv'


export const exportMemberships = async (req,res)=>{
    try{
     const memberships = await MemberShip.find()
     //format data for csv
     const membershipData = memberships.map(member=>({
        name:member.name,
        email:member.email,
        plan:member.plan,
        joinedAt:member.joinedAt.toISOString().split("T")[0]

     }))

     const fields = ['name','email','plan','joinedAt']
     const json2csvParser = new Parser({fields})
     const csv = json2csvParser.parse(membershipData)
       
     //sebd csv as download

     res.header('Content-Type','text/csv')
     res.attachment('memberships.csv')
     res.send(csv)
    }catch(err){
console.error("Export failed:", error);
    res.status(500).json({ error: 'Failed to export membership data' });
    }
}