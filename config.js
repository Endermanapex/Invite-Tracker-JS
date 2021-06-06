module.exports = {
    prefix: process.env.prefix,
    welcomeChannel: process.env.welcomeid,
    slashCommands: true,
    colors: {
        main: [0, 110, 255],
        error: [231, 76, 60]
    },
    botstatus: {
        enabled: false, // Wether or not the bot should have a status
        status: process.env.status, // The status of the bot (dnd, online, idle, invisible)
        activity_type: "process.env.status_type", // The type of the activity (watching, listening, playing, streaming)
        activity_text: "process.env.status_text", // The activity text
        activity_url: "https://google.com" // The stream URL
    },
    inviteRewards: false, // Wether or not invite rewards should be enabled
    rewards: [
        {
            invitesNeeded: 5, // The amount of invites they should have
            roleID: "" // The role ID for the role they should get
        }, //Copy and paste this for each invite reward
        {
            invitesNeeded: 10,
            roleID: ""
        }
    ],
    welcomeMessage: "{member} joined the server. They were invited by **{inviter}** (who has {invites} invites).", // Use {inviter} for who invited the member, {member} for the member, {code} for the invite used, {mention} to mention the inviter, {ID} for the ID of the member, {inviterID} for the inviter's ID, and {invites} for the inviter's invites
    leaveMessage: "{member} left the server. They were invited by **${inviter}** (who has ${invites} invites).", // Use {inviter} for who invited the member, {member} for the member, {mention} to mention the inviter, {ID} for the ID of the member, {inviterID} for the inviter's ID, and {invites} for the inviter's invites
}
