//Discord connection
const Discord = require('discord.js');
const {
    create
} = require('domain');
const client = new Discord.Client();

const Enmap = require('enmap')
//enmap default
const tickets = new Enmap({
    name: "tickets",
    autoFetch: true,
    fetchAll: true,
    ensureProps: true,
});

//BOT ACTIVATE BEEP BOOP
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//All message prompts within here
client.on('message', msg => {

    //tickets
    if (msg.content.toLowerCase() === '-new') {
        //add delete message 

        //current number system
        var tickNum = tickets.autonum;
        //channel creation, permission for input user
        msg.guild.channels.create('ticket-' + tickNum, {
            parent: '779843392435126282',
            type: 'text',
            permissionOverwrites: [{
                    id: msg.author.id,
                    allow: ['VIEW_CHANNEL'],
                },
                {
                    id: '727698551739777114',
                    deny: ['VIEW_CHANNEL']
                },
            ],
        }).then(chan => { //adding data to enmap for later retrieval
            tickets.ensure(chan.id, {
                user: msg.author.id,
                guild: msg.guild.id,
                ticket: tickNum,
                time: Date.now()
            })
            chan.send(`<@&772115096548933674>`)
            //delete ticket request in main channel
            console.log(`ticket-${tickNum} created for ${tickets.get(chan.id, "user")}`);
            msg.delete({
                timeout: 6969
            });
        });
    }

    //close within ticket
    if (msg.content === '-close') {
        if (!tickets.has(msg.channel.id)) {
            console.log(`Failed to find ${msg.channel.id} in tickets`)
            return
        };
        const tickChan = tickets.observe(msg.channel.id);
        //uses id of seller or admin to make it so they can delete channel
        if(tickChan.user === msg.author.id || msg.member.roles.cache.has('727698894053703741')){
            msg.channel.delete('ticket closed');
            console.log(`Deleted channel ${msg.channel.name} from tickets by ${msg.author.tag}`)
        }
    }
    //Specifically for Rexus, apply his ID to this? Anytime he says 'where' and 'mosa' 
    if (msg.content === 'where are my mosas') {
        msg.reply('Please be kind to the Fish Woman.');
    }

});



client.login('Nzc5ODA0MTk0NTcxMTU3NTY0.X7l3QA.8S579pJVAcsLvkFFQqedDZ53IMs');

//to do
/* command handler
    shopping cart using reactions to pick color, makes one of those 
    square messages? idk
    coin spending accumulation?
*/