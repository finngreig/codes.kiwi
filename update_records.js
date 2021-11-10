require('dotenv').config();

const cf = require('cloudflare')({
    token: process.env.CLOUDFLARE_TOKEN
});

const config = {
    ZONE_ID: process.env.ZONE_ID,
    CNAMES: require('./cnames.json')
};

async function updateRecords() {
    const records = await cf.dnsRecords.browse(config.ZONE_ID);
    
    for (let i = 0; i < config.CNAMES.length; i++) {
        const cname = config.CNAMES[i];
        const record = records.result.find(r => r.name === `${cname.name}.codes.kiwi`);
        if (record) {
            if (record.content !== cname.target || record.proxied !== !cname.noCloudflare) {
                console.log(`Updating ${cname.name}.codes.kiwi`);
                await cf.dnsRecords.edit(config.ZONE_ID, record.id, {
                    type: 'CNAME',
                    name: `${record.name}`,
                    content: cname.target,
                    ttl: 1,
                    proxied: !cname.noCloudflare
                });
            }
        } else {
            console.log(`Creating ${cname.name}.codes.kiwi`);
            await cf.dnsRecords.add(config.ZONE_ID, {
                type: 'CNAME',
                name: `${cname.name}.codes.kiwi`,
                content: cname.target,
                ttl: 1,
                proxied: !cname.noCloudflare
            });
        }
    }
}

// useful for debug
async function viewRecords() {
    console.log(await cf.dnsRecords.browse(config.ZONE_ID));
}

updateRecords()
    .then(() => console.log('Done'))
    .catch(err => console.error(err));
