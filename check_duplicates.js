const CNAMES = require('./cnames.json');

/**
 * Check for duplicates and return a boolean
 */
function checkDuplicates() {
    const cnames = CNAMES.map(cname => cname.name.toLowerCase());
    const uniqueCnames = [...new Set(cnames)];
    return cnames.length !== uniqueCnames.length;
}

if (checkDuplicates()) process.exit(1);
process.exit(0);