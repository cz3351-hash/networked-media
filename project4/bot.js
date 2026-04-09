//imports the dotenv libraray
//and allows us to access variables inside .env file
//by using process.env.VARIABLE_NAME
require('dotenv').config();

//importing the masto api that we will use
const m = require('masto')

//set up ability to use the masto library
//this is very similr to making app
//cont app=express()
const masto = m.createRestAPIClient({
    url: 'https://networked-media.itp.io',
    accessToken: process.env.TOKEN
})

const makeStatus = async () => {
    //customize the text output to be random when we run the function
    let botmessage= [
"Did you guys already start a chat about tomorrow's project? —— Chat History with 小米\n#tomorrowbot",
"Are we able to print tomorrow or no —— Chat History with angie li\n#tomorrowbot",
"@所有人 please remind the kids to wear the summer shirt or house shirt tomorrow —— Chat History with zhengwei\n#tomorrowbot",
"Tomorrow morning we're going to take some time to split into groups. —— Chat History with Christopher Doyole\n#tomorrowbot",
"We could also do tomorrow or Friday or next week —— Chat History with Faye Lin\n#tomorrowbot",
"Because some of you will welcome the exchange students tomorrow, you can come earlier than 5pm. But not earlier than noon. —— Chat History with Amanda Shen\n#tomorrowbot",
"1 class tomorrow —— Chat History with Max\n#tomorrowbot",
"have tech until 11 tomorrow —— Chat History with suzioueeeee\n#tomorrowbot",
"see you tmr —— Chat History with rosyrossi\n#tomorrowbot",
"how abt join us in bobst tmr at 9.30am[Grin] —— Chat History with Ell7ey🦭\n#tomorrowbot",
"rehearsal tmr morning —— Chat History with xxin\n#tomorrowbot",
"should we brainstorm what we want to do for the video jam tmr lol —— Chat History with Group\n#tomorrowbot",
"we good for tmr around 2 at 国贸？ —— Chat History with khlorinekrow\n#tomorrowbot",
"if doesnt work we can tmr or fri or sat or watever —— Chat History with lia\n#tomorrowbot",
"明天没早课了 —— Chat History with Ell7ey🦭\n#tomorrowbot",
"明天一整天都泡那了 —— Chat History with Ell7ey🦭\n#tomorrowbot",
"明天起来再研读剧本 —— Chat History with rosyrossi\n#tomorrowbot",
"明天的事情明天再说 —— Chat History with rosyrossi\n#tomorrowbot",
"明天开始要用ipad上闹钟了 —— Chat History with rosyrossi\n#tomorrowbot",
"睡觉了明天早上得上工 —— Chat History with rosyrossi\n#tomorrowbot",
"明天中午有人一起看two strangers吗 出一张lottery —— Chat History with 宽街搭子集合\n#tomorrowbot",
"明天午场2pm的chess有人想看吗,多了一张lottery, 49🔪front mezz E排正中 —— Chat History with 宽街搭子集合\n#tomorrowbot",
"明天上zoom了朋友们 —— Chat History with Writing 2026\n#tomorrowbot",
"明天第二节课要考io, 您的课会迟到几分钟, —— Chat History with 胖猫我来陪你了\n#tomorrowbot",
"睡了，不睡的话明天早上上不了课了 —— Chat History with suzioueeeee\n#tomorrowbot",
"55出 西蒙 托里 打包100出 明天可换 —— Chat History with Group\n#tomorrowbot",
"@所有人 各位家长好, 为按照要求落实课间15分钟和每天一节体育课, 本学期作息时间有调整。请大家查收, 明天开始执行。 —— Chat History with Group\n#tomorrowbot",
"好的，明天见！ —— Chat History with Group\n#tomorrowbot",
"有今晚青绿180换明天青绿180 优先换 换不到出 —— Chat History with Group\n#tomorrowbot",
"非常不好因为明天eng oral —— Chat History with Emi\n#tomorrowbot",
"明天发drafting吧 —— Chat History with Group\n#tomorrowbot",
"明天加油呀 —— Chat History with zerwee\n#tomorrowbot",
"明天白天放到prof的office —— Chat History with 两个大学生和她们的爸爸\n#tomorrowbot",
"proctors明天回学校了 —— Chat History with yxng\n#tomorrowbot",
"Never put off till tomorrow the fun you we can have today, —— 43799393-The-Art-of-Loving-Erich-Fromm_text.pdf\n#tomorrowbot",
"Neither the aging nor the speed of the digital, however, explains how or why it has become the new or why the yesterday and tomorrow of new media are often the same thing. —— The Enduring-Ephemeral-Wendy-Hui-Kyong-Chun.pdf\n#tomorrowbot",
"The subject tonight is Love.\nAnd for tomorrow night as well,\nAs a matter of fact,\nThere are no better topic\nFor us to discuss\nUntil we all\nDie! —— Week 2 - Love and the Humanities (1)\n#tomorrowbot",
"becoming not only an active member of the university, but a leader of tomorrow. —— 50 Ivy League Essays.pdf\n#tomorrowbot",
"You're yesterday's news, they joke, and Pietro jokes back that better yesterday's news than tomorrow's, if they know what he means. —— OceanofPDF.com_Orbital_-_Samantha_Harvey.pdf\n#tomorrowbot",
"Basics are basics. What was basic yesterday will be basic tomorrow. Basics are the constants, the unchanging foundations upon which creative work can be built. —— FoldingTechniquesForDesigners-Jackson.pdf\n#tomorrowbot",
"2. What is the man explaining when he mentions that he has a morning class?\nA) Why he cannot wait until the evening to check out library materials\nB) Why he may not be able to return library materials on time\nC) Why he should not have to pay a potential fine for late library materials\nD) Why he will wait until tomorrow morning to check out library materials —— 听力真题 第4套.pdf\n#tomorrowbot",
"DaLian: Bro, we'll come back tomorrow, something came up today ...... —— 南墙计划翻译\n#tomorrowbot",
"Ask yourself this: What would happen if tomorrow every single player on the Auburn football team quit and reformed as a professional team called the Birmingham Bandits. Who would go to their games? Anyone? How much would those talented young men get paid? —— The Norton Sampler 9th ed.pdf\n#tomorrowbot",
"Shrubs Evergreen / Brunfelsia pauciflora 'Floribunda' / Brunfelsia pauciflora 'Floribunda' / Brunfelsia / pauciflora / 'Floribunda' / Shrub Chartreuse 18 60pct / Deutzia 'NCDX2' 0.7 IP / Yesterday, Today And Tomorrow / BrpaFl / —— Plant Style Data\n#tomorrowbot",
"Lemay, E. P., Jr., Lin, J. L., & Muir, H. J. (2015). Daily affective and behavioral forecasts in romantic relationships: Seeing tomorrow through the lens of today. Personality and Social Psychology Bulletin, 4, 1005-1019. —— intimate-relationships-ninth-edition_compress.pdf\n#tomorrowbot",
"Moreover, the benefits of NASA funding extend beyond the purely economic, as astrophysicist Neil deGrasse Tyson indicated in his testimony before the US Senate: For a penny on a dollar, we can transform the country from a sullen, dispirited nation to one where it reclaims its birthright to dream of tomorrow. —— SAT语法 - 基础讲义 .pdf\n#tomorrowbot",
"Rehearsal video for run-through (blocking always subject to change) - video from tomorrow —— gtt lighting notes\n#tomorrowbot",
"So instead of just being taught about the machines of today, you will also be given the tools to teach yourself the machines of tomorrow. —— IMNY-UT 252 Introduction to Digital Fabrication\n#tomorrowbot",
"NORA: Someone is coming now! No — it is no one. Of course, no one will come today, Christmas Day — nor tomorrow either. But, perhaps — No, nothing in the letterbox; it is quite empty. What rubbish! of course he can't be in earnest about it. —— A Doll's House\n#tomorrowbot"
];
    //this grabs a random index between 0-emoji.length
    //this number needs to be a whole number
    let randomSelection=Math.floor(Math.random()*botmessage.length)

    const s = await masto.v1.statuses.create({
        status: botmessage[randomSelection],
        visibility: 'public'//use 'public' when we want others to see.
    })
    console.log(s.url)
}

//will post one status one time
// makeStatus();

//
//number of milliseconds- one time very 10 seconds
setInterval(makeStatus, 2000000)