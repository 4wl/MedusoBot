const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on('ready', () => {
console.log("Im fucking ready!")
})



bot.login('把token放在這裡')


bot.on('message', message => {
    if(message.content === 'm!hi') {
        let embed = new Discord.MessageEmbed()
        .setTitle("作者群")
        .setDescription("作者幹話:這隻機器人是我無聊做的XD 極劣質!!\n如果喜歡的話 那就在心中說我很棒吧XD")
        .setColor("#64c43e")
        .setAuthor("我是作者 : Medusa#4699", message.author.avatarURL("discord.d5Vwf6MbSu"))
        .setFooter("我是頁腳", message.author.avatarURL("discord.d5Vwf6MbSu"))
        .setTimestamp()
        .setURL("https://discord.gg/d5Vwf6MbSu")
        message.channel.send(embed)
    }
})

bot.on('message', message => {
    if(message.content === 'm!av') {
        let embed = new Discord.MessageEmbed()
        .setTitle("你的頭貼")
        .setImage(message.author.avatarURL({format: "png",dynamic: true,size:2048}))
        message.channel.send(embed)
    }
})

bot.on('message', message => {
    if(message.guild) {
        if(message.content === 'm!serverinfo') {
            let embed = new Discord.MessageEmbed()
            .setTitle(message.guild.name+" 的伺服器資料")
            .setDescription(message.guild.id)
            .setThumbnail(message.guild.iconURL())
            .addField("伺服器區域", message.guild.region)
            .addField("成員數", message.guild.memberCount)
            .addField("頻道數", message.guild.channels.cache.size)
            .addField("表情數", message.guild.emojis.cache.size)
            .addField("身分組數", message.guild.roles.cache.size)
            .addField("創群日期", message.guild.createdAt.toUTCString())
            .addField("擁有者ID", message.guild.ownerID)
            message.channel.send(embed)
            
        }
    }
})



bot.on('message', message => {
    if(message.content === 'm!time') {
        let embed = new Discord.MessageEmbed() 
        .setTimestamp()
        .setColor("#14c4b1")
        message.channel.send(embed)
    }
})



bot.on('message', message => {
    if(message.guild) {
        if(message.content.startsWith('m!say')) {
            let text = message.content.replace('m!say',"")
            if(text === null) return;
            message.channel.send(text)
        }
    }
})

 bot.on('message', message => {
     if(message.content === "嗨") {
         message.channel.send("三小啦")
         if(message.author.bot) return;

     }else if(message.content.startsWith("晚安")) {
         if(message.author.bot) return;

message.channel.send("晚安qwq 要沒人陪我了")

     }else if(message.content.includes("早安")){
         if(message.author.bot) return;
     
     message.channel.send("早安awa 有人起床了")
     
        }else if(message.content.includes("午安")){
            if(message.author.bot) return;

message.channel.send("午安安安安")

        }
 })

 bot.on('message', message =>{
     if(message.content.startsWith("m!cut")) {
         if(message.author.bot) return;

         let args = message.content.replace("m!","").split(' ').join(',')
     
         message.channel.send(args)
        }
 } )


 bot.on('message', message => {
     let prefix = "m!"
 })


    bot.on('message', message => {
   if(message.content === "m!help") {
       let embed = new Discord.MessageEmbed()
       .setTitle("指令介紹")
       .setDescription("1.m!hi\n2.m!av\n3.m!serverinfo\n4.m!time\n5.m!say\n6.m!cut\n7.m!delmsg\n8.m!rank (目前還是沒有用的狀態\n9.m!tag")
       .setFooter("owo!")
       .setColor("#00ffea")
       message.channel.send(embed)
    }
    })
    

    bot.on('message', message => {
        if(message.content === "m!delmsg") {
        message.delete()
        }
    })

   
      
  bot.on('message', message => {
      if(message.content === "m!rank") {
          let voiceEmbed = new Discord.MessageEmbed()
          .setTitle("等級訊息設置 (目前還是沒有用的狀態")
          .setDescription("使用 m!setup rank [訊息]`\n◆想使用當頻道只要不填入訊息即可\n使用 m!setup rank [空兩格]` 來關閉經驗值訊息\n在訊息裡面加上以下東西可以增加參數:\n- `{user}` 及提用戶\n- `{server}` 伺服器名稱\n- `{rank}` 等級")
            .setColor('#2d9af8')
            .setFooter(message.author.username)
            message.channel.send(voiceEmbed)
           }
        })





        bot.on('message', message => {
            if(message.content === "m!tag") {
                message.channel.send("@everyone")
            }else if(message.content === "m!tag"){
                message.channel.send("@here")
                if(message.author.bot) return;
            }
        })


        bot.on('message', message => {
            delete(options = {}) 
                if (typeof options === 'm!delmsg') return Promise.reject(new TypeError('INVALID_TYPE', 'options', 'm!delmsg', true));
                const { timeout = 0, reason } = options;
                if (timeout <= 0) {
                } else {
                  return new Promise(resolve => {
                    this.client.setTimeout(() => {
                      resolve(this.delete({ reason }));
                    }, timeout);
                  });
                }
              }
        )



        bot.on('message', message => {
            if(message.content === "m!meme") {
                const superagent = require("superagent");
           
           async function Meme() {
               const url = `https://cdn.nic20.tk/meme`;
               const reply = new superagent.get(url);
               return reply.body
           }
           const data = new Meme() 
           return message.channel.send(
               new Discord.MessageEmbed()
               .setTitle(data.tittle)
          .setURL(data.preamlink)
          .setImage(data.image_url)
          .setColor("RANDOM")
          .setFooter(`來自 ${data.subreddit} | 作者 ${data.author}`)
               )
            }

        })


    