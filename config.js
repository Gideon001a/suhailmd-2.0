const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_16_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4LFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTksXG4gICAgICAgIDk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMCxcbiAgICAgICAgODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2MVh2Z1UzNnNOcFhVdEFONXlaaDJJekZqZ0poM2tDTGg4VEJ5U1c0SElJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwWlF5UnRrcVExRzUxWEZfSGtPcklRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRjMTBjZWRhLTU0MjItNGZmZS05MmNjLTMxYjYyMGE2NmRkOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAyMzgsXG4gICAgICAyMzQsXG4gICAgICA1OSxcbiAgICAgIDIwNixcbiAgICAgIDE1MyxcbiAgICAgIDM5LFxuICAgICAgMjUwLFxuICAgICAgNDAsXG4gICAgICAyMDUsXG4gICAgICAyMDIsXG4gICAgICAxMTAsXG4gICAgICAxNzMsXG4gICAgICA5MyxcbiAgICAgIDE2NixcbiAgICAgIDIzNSxcbiAgICAgIDE3LFxuICAgICAgNjIsXG4gICAgICAxMTgsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMTAyLFxuICAgICAgNzUsXG4gICAgICAxNDgsXG4gICAgICAyMDgsXG4gICAgICAxNDAsXG4gICAgICAxNSxcbiAgICAgIDExMSxcbiAgICAgIDE1NyxcbiAgICAgIDIzNixcbiAgICAgIDIyNSxcbiAgICAgIDE1MixcbiAgICAgIDAsXG4gICAgICAzOSxcbiAgICAgIDEyNSxcbiAgICAgIDUzLFxuICAgICAgMTUwLFxuICAgICAgMTMxLFxuICAgICAgNzksXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzZHNjVCWDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjc0MDA0ODg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIzNjczOTY5MjEzNjczOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUQ3K1BNR0VKYUV5cmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvWnl3WldVRVdaMzBlVnZRNms2Y2Q0VnY0elV5cFozeUI4Ky9vY3l2bFhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVqQVpLTVNFQU85WkJDcWlVMzE3cS8wam5MQ3lpZWhkSFdmcFBrWFVQbXdmUTJlWERkcFpXWmYvb1JjWlpscFFkZnRhZ2FtMnBZMHJlVUZnSDcrMEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9wYXdEbTh2dGt4OXJaUE11MFJWcjVSb3pDQ1liSEdFWW9SNFl4b2NDYjJtOWZZMTlaZ3NBMmRrZlBJUUkrZFlmb3RQWmYwVUhsVkNMZkpqSnB4dURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjc0MDA0ODg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTM2MzM1NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
