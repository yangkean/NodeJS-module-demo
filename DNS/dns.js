const dns = require('dns')

dns.lookup('alloyteam.com', (err, address, family) => {
  console.log(`IP 地址：'${address}' 地址簇：IPv${family}`) // IP 地址：'115.159.49.126' 地址簇：IPv4
})

dns.resolve4('taobaofed.org', (err, addresses) => {
  if(err) throw err

  console.log(`IP 地址：${JSON.stringify(addresses)}`) // IP 地址：["151.101.77.147"]

  addresses.forEach((a) => {
    // 反向DNS查询返回IPv4或IPv6地址的主机名的数组
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        console.log(err.code)
        throw err
      }
      console.log(`IP 地址 ${a} 逆向解析到域名：${JSON.stringify(hostnames)}`)
    })
  })
})

