![codes.kiwi - free subdomains](https://img.shields.io/badge/codes.kiwi-free%20subdomains-00ba31?style=for-the-badge)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/finncodes?color=00ba31&label=Donate&logo=githubsponsors&style=for-the-badge)](https://github.com/sponsors/finncodes)

---

**To get a cool subdomain for your own GitHub Pages site follow these easy steps:**

### Step 1
If you haven't already, now it's time to log in to your GitHub account and set up your GitHub Pages site following the instructions [here](https://pages.github.com/). To get a head start you can simply use the generator with one of the provided themes and **add some reasonable content to your new page**.

### Step 2
Now determine your codes.kiwi subdomain: either choose your username or the name of your repo according to the existing GitHub Pages URL (for ```http://foo.github.io/bar```, either ```foo.codes.kiwi``` or ```bar.codes.kiwi``` would be possible).

### Step 3
Add a file named ```CNAME``` to your repo (in the ```gh-pages``` branch for project pages) with a single line matching the domain you have chosen (e.g. ```foo.codes.kiwi```). If you prefer a web interface form, have a look at [GitHub Pages Help](https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/).

### Step 4
To finish the procedure, make a pull request in this GitHub repository that adds your subdomain to the [list](https://github.com/finncodes/codes.kiwi/blob/main/cnames.json) of existing codes.kiwi domains. Your new URL should go live within 24 hours (keep an eye on your pull request in case of a naming conflict).

---

### Thanks
... to **[Cloudflare](https://www.cloudflare.com)** for providing the robust DNS service that makes this possible - for free too!
