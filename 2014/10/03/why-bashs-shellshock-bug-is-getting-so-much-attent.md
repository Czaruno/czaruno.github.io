---
layout: post
published: true
title: "Why Bash's Shellshock bug is getting so much attention"
date: 2014-10-03
author: Sinu
categories: BASH, IT, Linux, Mac OSX, Shellshock
link: /blog/2014/10/3/why-bashs-shellshock-bug-is-getting-so-much-attention.html
---

*Customers using the Sinu service should rest assured that all steps have been taken to protect the Sinu infrastructure from Shellshock. We have reviewed all of our customers'  devices we are aware of for vulnerabilities and performed updates where needed. However, we wanted to provide some information about this bug and why it is getting so much attention.*

---

Customers using the Sinu service should rest assured that all steps have been taken to protect the Sinu infrastructure from Shellshock. We have reviewed all of our customers'  devices we are aware of for vulnerabilities and performed updates where needed. However, we wanted to provide some information about this bug and why it is getting so much attention.

According to a[ ZDNet report](http://www.zdnet.com/the-shellshock-faq-heres-what-you-need-to-know-7000034219/?s_cid=e539&ttag=e539&ftag=TRE17cfd61), “Shellshock is a nickname for a bug in the[ Bash (Bourne Again SHell)](http://www.gnu.org/software/bash/) command-line interpreter, also known as a shell. The Bash shell is widely distributed as the default command-line interpreter on many operating systems including most flavors of Linux, many flavors of Unix, some flavors of BSD, and Apple's OS X (since 10.3). The Bash shell can also be found on many other systems, from Windows to Android. However, it is not installed and/or used by default on these systems.”

Recently, a decades-old flaw was discovered in Bash that - if co-opted - could allow hackers to remotely control a person’s computer. While this certainly concerns individuals who use the systems, the greater concern is related to online commerce sites that may use Bash as a foundation for their websites. While consumers were urged not to make online purchases for a few days after the flaw was discovered, a patch has been released to address that issue.

Who is most vulnerable to Shellshock?

While all users of Bash are vulnerable, those most at risk are e-commerce sites and programmers who are using advanced versions of Unix, OS X, or Linux systems.

According to the[ ZDNet report](http://www.zdnet.com/the-shellshock-faq-heres-what-you-need-to-know-7000034219/?s_cid=e539&ttag=e539&ftag=TRE17cfd61) (which does a really good job of detailing the specific systems that are most at risk of being exploited), “Systems running Internet servers are the most vulnerable and likely to be targeted. Home users who have Bash on a personal computer may also be exposed if they use untrusted networks (i.e. [Public Wi-Fi access points](http://sinu.squarespace.com/blog/2014/9/3/how-to-protect-your-data-when-using-public-wi-fi.html)). The average Internet user running Windows, Mac OS, iOS or Android is not vulnerable, at least not by default. But the compromise of Internet servers trusted by those users could facilitate other attacks on clients by the server, and confidential user data on the servers could be exposed to attackers.”

How serious is Shellshock?

The[ US National Cyber Security Division gave Shellshock](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6271) a score of 10 out of 10. The last major virus, Heartbleed, was rated 11 on a scale of 0-10, however, some have say the Shellshock flaw could end up being worse than Heartbleed because it attacks the backbone of the Internet.

Hundreds of thousands of Internet connected servers were readily vulnerable to Shellshock when it was it was first discovered. This is a conservative estimate and experts say it is likely that many of these servers have since been compromised.

Sinu will remain vigilant in [working with our vendors](https://sinu2.squarespace.com/our-technology-partners/) to ensure our infrastructure has the latest patches and updates to help protect from Shellshock and other vulnerabilities. As always, it is our mission to provide our customers with safe, reliable technology with minimum downtime and maximum productivity.