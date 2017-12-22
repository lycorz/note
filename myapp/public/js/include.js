$(window).on('load', function(){
	$('.footer').load('../pages/include/footer.html');

});
function GetQueryString(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null) {return  unescape(r[2]); }
	return null;
}
$(document).ready(function() {
	var data = {
		"01": [
		{
			"title": "政德的力量",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/zddll.mp4"
		}
		],
		"02": [
		{
			"title": "政德基地  政德圣地",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4"
		}
		],
		"qf101": [
		{
			"title": "曲阜孔庙万仞宫墙现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "孔庙位于曲阜市中心鼓楼西侧300米处，是我国历代封建王朝祭祀春秋时期思想家、政治家、教育家孔子的庙宇。始建于鲁哀公十七年（公元前478年），历代增修扩建。现存建筑群大部分是明、清两代完成的，占地300余亩，前后九进院落。庙内有殿堂、坛阁和门坊等460多间，是一组极具东方建筑特色、规模宏大、气势雄伟的古代建筑群。",
			"desc2": "万仞宫墙，原名仰圣门，它既是明、清时期曲阜县城的正南门，也是孔庙的大门。宋大中祥符五年（公元1012年），改曲阜县名为“仙源县”，迁治所于寿丘，孔庙与县城分离，失去保护。明正德七年（公元1512年），刘六、刘七领导的农民起义军占据孔庙，“秣马于庭，污书于池”，引起朝野震惊。明正德皇帝下令建城卫庙，以孔庙、孔府为中心修筑了明曲阜城墙。新城于明嘉靖元年（公元1522年）竣工，其南门同时作为孔庙的大门，建有高大的城门楼，外圆内方，即现在的万仞宫墙。"
		}
		],
		"qf102": [
		{
			"title": "曲阜孔庙大中门现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "大中门是孔庙的第四道大门，始建年代不详，宋元时期为孔庙的正门，明弘治年间曾重修，清代重建，门上“大中门”匾额系乾隆皇帝题写。该门原名“中和门”，后改为“大中门”，门高9.5米，宽20米，进深7.5米，单檐悬山顶，绿琉璃瓦覆顶，五檩三柱分心式木架，檐下、脊檩下均施一斗三升斗拱。"
		}
		],
		"qf103": [
		{
			"title": "曲阜孔庙杏坛现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "孔庙杏坛位于孔庙核心建筑大成殿南侧，由一座高台和建于高台之上的亭子组成，周围环植以杏树，故曰“杏坛”。杏坛是纪念孔子讲学的地方，高12米，阔7米，平面呈正方形，四面敞开。屋盖为十字结脊，四面歇山，重檐，亭内上下檐均用天花。杏坛内现有石碑两通，面西一碑为金代文人党怀英篆书“杏坛”二字，由孔子51代孙孔元措立石；面南一碑为乾隆皇帝手书的《杏坛赞》。",
			"desc2": "宋代以前孔庙内并无杏坛。宋天禧二年（公元1018年），孔子45代孙孔道辅监修孔庙，将正殿位置后移，在原正殿旧址建立“杏坛”。金代在坛上建亭，经元、明、清数次重建重修，形成今天的规模。"
		}
		],
		
		"qf104": [
		{
			"title": "曲阜孔庙孔氏家庙现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "孔庙崇圣祠，又称“五代祠”，位于孔庙核心建筑大成殿东侧，属于孔庙东、中、西三路布局的东路部分。崇圣祠用于祭祀孔子上五代祖先，现存建筑始建于明弘治十七年（公元1504年），殿阔5间，殿前廊下立有8根刻花石柱，中间两柱浮雕双龙戏珠。清雍正元年（公元1723年）追封孔子上五代祖先为王，殿内以“四配”（颜回、曾子、子思、孟子）的父亲配享，以宋代大儒周敦颐、张载、程颐、朱熹、蔡沈等先贤之父为从祀。祠前有三通孔子世系石碑，名曰“孔氏家谱碑”。"
		}
		],
		"qf105": [
		{
			"title": "曲阜孔府重光门现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "孔府又称“衍圣公府”或“圣府”，西与孔庙毗邻，是孔子嫡系后代居住的地方，也是历代衍圣公的衙署和私邸。孔府占地180余亩，各类建筑460余间，分前后九进院落，中、东、西三路布局，是我国现存规模最大、建筑最豪华的封建官僚贵族府第。",
			"desc2": "重光门位于孔府第二道门“圣人之门”与孔府大堂之间，始建于明弘治十六年（公元1503年），门高5.9米，宽6.2米，进深2米，四柱三间三楼，明间略高，前后各有4个倒垂的木雕莲蕾，因此也称“垂花门”。整座门比例匀称，造型庄重，具有明显的明代前期建筑风格，为该时期建筑中的上乘之作，也是孔府建筑的最高规制。过去，重光门只有在孔府大典、迎接圣旨或进行重大祭祀活动时，才在十三响礼炮声中将此门徐徐开启，故又称“仪门”。在封建社会，一般的官宦府第是没有资格建造“仪门”的，只有被封建帝王封爵的邦君才能享此殊荣。"
		}
		],
		"qf106": [
		{
			"title": "曲阜孔府内宅戒贪图现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "孔府内宅屏门有一幅彩色壁画，名曰“戒贪图”。画中貌似麒麟的动物，就是传说中的“犭贪	”，其生性饕餮，贪得无厌。壁画彩云中，全是被其占有的宝物，包括“八仙”的宝贝。但它并不满足，仍妄图将太阳吞入腹中，最后落得个葬身大海的可悲下场。",
			"desc2": "戒贪图处在衍圣公出入内宅的必经之路，其用意是提醒自己、家人并告诫子孙为官应当清正廉洁，常怀律己之心，不要贪得无厌。"
		}
		],
		"qf107": [
		{
			"title": "曲阜孔林孔子墓现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "孔林又称至圣林，位于山东曲阜城北、孔庙孔府正北3公里处，是孔子及其后裔的家族墓地，也是世界上延续时间最长的家族墓地。孔林占地3800多亩，坟冢10万余座，墓碑4000余通，古建筑116间，石像、石仪85对。",
			"desc2": "孔子墓是孔子及其夫人亓官氏的合葬墓，位于孔林中部偏南区域。鲁哀公十六年（公元前479年），孔子在鲁国去世后葬于鲁城北泗上。根据《孔氏祖庭广记》记载：“孔子冢去城一里，茔冢百亩，北广十步，东西三十步，高一丈二尺。”可见，原墓规模很小，无法与当时的王公贵族墓相提并论。今孔子墓封土东西30米，南北28米，高5米，似一隆起的马背，故称“马鬣封”。墓前有石碑两通，前碑篆书“大成至圣文宣王墓”，后碑篆书“宣圣墓”。碑前有石供案、石香炉、石砌拜台及砖砌花棂围墙等。"
		}
		],
		"qf108": [
		{
			"title": "曲阜孔庙太和元气坊现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "太和元气坊位于孔庙第一道大门棂星门北侧，建于明嘉靖二十三年（公元1544年），石质牌坊，造型与“金声玉振”坊相同，为三间四柱冲天式，高5.6米，宽13.5米。柱为八角形，前后石抱鼓夹抱，柱头为仰莲座，柱顶有圆雕鳞甲独角兽“辟邪”一只，俗称“朝天吼”。明间额坊稍高，两次间额坊对称递减，平钑云龙图案。额坊均覆盖悬山顶，整石刻成瓦垄形，有脊无吻。“太和元气”四字为时任山东巡抚曾铣手书。"
		}
		],
		"qf109": [
		{
			"title": "曲阜孔庙大成殿现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "大成殿是孔庙的核心建筑，是祭祀孔子的中心场所。殿高25米，宽46米，进深25米，坐落在2米高的月台上，是孔庙的最高建筑。大成殿九脊重檐，黄瓦覆顶，雕梁画栋，八斗藻井饰以金龙和玺彩图，四周廊下环立28根石雕龙柱，均以整石刻成，为明代弘治年间徽州工匠刻制，其中，前檐10根为深浮雕龙柱，两山及后檐18根为浅雕龙柱。",
			"desc2": "大成殿取自《孟子》“孔子之谓集大成”的语义，“大成殿”三个贴金大字为清雍正皇帝御书。殿内正中供奉孔子塑像，两旁为四配和十二哲的塑像。孔子像坐高3.4米，头戴十二旒冠冕，身穿十二章王服，手捧镇圭。",
			"desc3": "大成殿与北京故宫太和殿、泰安岱庙天贶殿并称为“东方三大殿”。"
		}
		],
		"qf110": [
		{
			"title": "孔子研究院现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "孔子研究院座落于山东省济宁市所辖曲阜市中心，孔庙、孔府正南约1公里处，是1996年经国务院批准设立的唯一一所专门研究孔子及儒家思想的机构，集学术研究、学术交流、文献收藏、人才培养、博物展览等功能于一体，以建设世界儒学研究交流中心为发展目标。研究院由两院院士吴良镛先生设计，占地150亩，建筑面积4.6万多平方米。",
			"desc2": "建院20多年来，先后承担国家社会科学基金项目和省部级重点课题数十项，编纂出版各类学术专著、丛书60余部，连续成功举办了七届世界儒学大会和六届“孔子文化奖”评选活动，创办了公益性文化交流平台——“春秋讲坛”，与台湾中华大成至圣先师孔子协会等20多个国（境）内外文化机构、高校建立了长期友好合作关系。2013年11月26日，习近平总书记视察孔子研究院，主持召开专家学者座谈会并发表重要讲话，提出要大力弘扬中华优秀传统文化的重大命题。"
		}
		],
		"qf201": [
		{
			"title": "曲阜周公庙元圣殿现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "周公庙位于曲阜市城区东北方向，距孔庙孔府约2公里，占地40余亩。西周初年，周公被分封于鲁，但周公留佐成王，故长子伯禽就封，建鲁国。因周公佐周之殊功，特许其子伯禽于鲁设立太庙（即曲阜周公庙），以祀远祖。北宋大中祥符元年（公元1008年）追封周公为“文宪王”，在太庙旧址重建新庙，后经元、明、清多次修建，形成现今规模。",
			"desc2": "元圣殿是周公庙的主体建筑，殿阔5间，进深3间，建于砖石台基之上。大殿屋顶覆绿琉璃瓦，殿内正中有木雕神龛一座，内有周公塑像，像高2.6米，头戴十二冕旒，身穿十二章青袍盘龙服，牌位刻“元圣周公文宪王之神位”。神龛上方悬“明德勤施”横匾，两旁金柱挂木雕对联一副，均为乾隆皇帝手书。东山墙西向有神龛一座，内塑周公之子伯禽塑像。西山墙东向有金人站像一尊。此殿于1953年重建，塑像在“文革”期间被毁，1985年重塑。"
		}
		],
		"qf202": [
		{
			"title": "周公庙金人铭碑现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "周公庙元圣殿院内甬道两侧排列着13通石碑，西排南起第一通石碑名为“金人铭”碑。相传，周公之子伯禽就封鲁国时，周公恐其有失，亲书铭文于老管家金人的背上，并叮嘱金人要让伯禽随时观看，以免忘记自己的训诫。同时，伯禽就封鲁国前，周公还交给他一份《诫伯禽书》，告诫他要谦虚谨慎。《金人铭》和《诫伯禽书》既是周公嘱其子伯禽处事的铭言，也是周公从政的切身经验。现立于周公庙的金人铭碑由孔子七十二代孙孔宪彝撰写，清道光二十年（公元1840年）由长洲王大堉立石。",
			"desc2": "金人铭：",
			"desc3": "古之慎言人也。戒之哉！戒之哉！无多言，多言多败；无多事，多事多患。安乐必戒，无行所悔。勿谓何伤，其祸将长；勿谓何害，其祸将大；勿谓何残，其祸将然；勿谓不闻，神将伺人。焰焰不灭，炎炎若何。涓涓不壅，终为江河。绵绵不绝，或成网罗。毫末不札，将寻斧柯。诚能慎之，福之根也。曰是何伤，祸之门也。彊梁者不得其终，好胜者必遇其敌。盗憎主人，民怨其上。君子知天下之不可上也，故下之。知众人之不可先也，故后之。温恭慎德，使人慕之，执雌持下，人莫踰之。人皆趋彼，我独守此。人皆惑之，我独不徙。内藏我智，不示人技。我虽尊高，人弗我害。谁能于此，江海虽左，长于百川，以其卑也。天道无亲，而能下人。戒之哉！"
		}
		],
		"qf301": [
		{
			"title": "曲阜颜庙陋巷井现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "颜庙又称“复圣庙”，位于曲阜明故城北门内东侧，与孔府一路之隔，占地36亩，分前后五进院落，中、东、西三路布局。原建于曲阜城东北3公里处五泉庄附近，元代迁至今陋巷故址。",
			"desc2": "陋巷井位于颜庙第一道大门内西侧，为颜子当年吃水的水井，因颜子居陋巷而得名。北宋熙宁年间，“颜子之故居谓陋巷者，有井存焉，而不在颜氏者久矣。胶西太守孔宗翰始得其地，浚治其井，作亭于其上，命之为‘颜乐’”。元代元贞年间，孔子第53代孙、袭封衍圣公孔治命颜族复构于故基，始于井上建亭。清嘉庆十五年（公元1810年）重修时曾拆盖。1979年揭瓦彩画，井壁为砖砌，井口用石砌成圆形，并且覆盖圆石，留有一小孔。井亭呈六边形，平面边长3.9米，亭高4.6米，单檐灰瓦，形似攒尖顶，但顶部留有一孔，与井口相对。井的北面有明嘉靖三十年（公元1551年）立的“陋巷井”石碑一通。明万历六年（公元1578年）于亭前立“陋巷故址”石碑一通，以说明此为颜子所居陋巷的原址。"
		}
		],
		"zc001": [
		{
			"title": "邹城孟庙泰山气象门现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "孟庙位于山东省济宁市所辖邹城市城区南部，占地36亩，是历代祭祀孟子的庙宇，始建于北宋景祐四年（公元1037年），前后分为五进院落。泰山气象门是孟庙的三进院的大门，位于亚圣庙坊之北，单檐歇山式建筑，灰瓦覆顶，门面阔三楹，前面立4根红漆柱，斗拱和门楣遍饰彩绘，门额悬挂金字“泰山气象门”匾额。",
			"desc2": "“泰山气象”取自宋代著名理学家程颢之说：“仲尼天地也，颜子和风庆云也，孟子泰山之岩岩气象也。”意即孟子的气度和风范就如同五岳之首的泰山一样，高大巍峨、令人敬仰。"
		}
		],
		"zc002": [
		{
			"title": "邹城孟庙孟母断机处现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "五通碑位于孟庙第三进院内康熙碑亭的东侧。由西至东分别为“孟母断机处”碑、“孟母三迁祠”碑、“子思子作中庸处”碑、“述圣遗像”碑和“述圣子思子赞”碑。“孟母断机处”碑和“孟母三迁祠”碑是为纪念孟母断机喻学和三迁择邻的故事而立；“子思子作中庸处”碑是为纪念子思在邹著《中庸》一书而立；“述圣遗像”碑上端刻有宋高宗十四年（公元1145年）御制的《子思赞》篆书，赞文下刻子思坐像；“述圣子思子赞”碑刻有清乾隆十三年（公元1748年）乾隆皇帝所题写的四言律诗，高度评价了子思“述文师之意，穷性命之源，极天人之奥”的功业。",
			"desc2": "这五通石碑原分立于孟庙正北300米处的孟母断机堂、中庸书院及子思祠内。解放战争时期，3处古迹均毁于战火，幸存的石碑于1972年移入孟庙现位置处保存。"
		}
		],
		"zc003": [
		{
			"title": "邹城孟庙亚圣殿现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "亚圣殿位于孟庙的第四进院内，是孟庙的主体建筑，始建于北宋宣和三年（公元1121年），历经宋、金、元、明、清至今50余次修葺。大殿为七楹、重檐歇山式建筑，绿色琉璃瓦覆顶，殿高17米，宽27.7米，进深20.5米。大殿四周廊下环立26根八棱石柱，均以整石刻成。据考证石柱下面的覆莲柱础是宋代建庙时留下的原物，石柱为明弘治九年（公元1496年）重建时所刻制，殿前8根水磨石柱上装饰有浅雕线刻纹饰。殿前的大型露台是祭祀时表演乐舞的场所。",
			"desc2": "大殿门楣之下的横匾“道阐尼山”，为清乾隆皇帝亲赐，同时题写的还有殿内抱柱对联：“尊王言必称尧舜，忧世心同切禹颜”。殿内正中放置雕龙贴金的神龛，龛中供奉孟子彩色塑像，头带九旒之冕，身穿九璋之服，手执桓圭。神龛上方高悬清雍正皇帝手书“守先待后”的金匾，意为孟子守先王之道，以期待后世对儒学的传承。"
		}
		],
		"zc004": [
		{
			"title": "邹城孟庙官箴碑现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "明万历年间，邹县知事梁州彦立此碑于县衙，以激励自己和僚属廉洁勤政。官箴碑是一通极为罕见的四面碑，形制较为特别，没有碑首与碑座，碑身为方柱体结构，每面突出一个主题，分别镌刻着仁、廉、公、勤四篇箴文，所以被称为“仁廉公勤”官箴碑。上世纪50年代，因旧县衙毁损，该碑移至孟庙致敬门内西侧保存至今。",
			"desc2": "官箴碑文：",
			"desc3": "右仁箴： 古者于民饥溺，犹己饥溺。心诚求之，若保赤子。於戏!入室笑语，饮醲啮肥；出则敲扑，曾痛痒知不知。人心不仁，一至于斯！淑问之泽，百世犹祀。酷吏之后，今其余几？惟甘小人而不为君子。",
			"desc4": "右廉箴： 惟士之廉，犹女之洁，苟一毫之点污，为终身之玷缺。毋谓暗室，昭昭四知。汝不自爱，心之神明其可欺？黄金五六驼，胡椒八百斛，生不足以为荣，千载之后有余戮。彼美君子，一鹤一琴，望之凛然，清风古今。",
			"desc5": "右公箴： 厚姻娅，近小人，尹氏所以不平于秉钧；开诚心，布公道，武侯所以独优于王佐。故曰本心日月，利欲蚀之。大道康庄，偏见窒之。听信偏，则枉直而惠奸；喜怒偏，则赏僭而刑滥。惟公生明，偏则生暗。",
			"desc6": "右勤箴： 尔服之华，尔馔之丰，凡缕丝与颗粟，皆民力乎。尔供居焉而旷，厥官食焉而怠其事，稍有人心，胡不自愧？昔者君子，靡素其餐。炎汗浃背，日不辞难；警枕计功，夜不遑安。谁为我师？一范一韩。"
		}
		],
		"zc005": [
		{
			"title": "邹城孟府大堂现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "孟府位于孟庙的西侧，与孟庙一路之隔，始建于北宋末期，占地30余亩，前后分为七进院落。孟府大堂是孟府的主体建筑，为五楹出厦正厅，建在一片高出院落的方形露台上，两侧竖着精雕的夔龙石栏和青砖花墙绕护的丹墀，东南角设置一座“日晷”，是古代的计时器；西南角设置“嘉量”，是标准的度量衡。大堂正中木制暖阁内设公案，背景绘制暗八仙等图案，暖阁两侧陈列着各种执事。",
			"desc2": "孟府大堂是孟子嫡系世袭翰林院五经博士开读诏旨，接待官员，申饬族规家法以及节日寿辰举行重要仪式的地方。堂前檐下正中悬挂着清雍正皇帝手书钦赐孟子第65代孙孟衍泰的“七篇贻矩”堂匾。门两侧撰有抱柱对联，上联“继往开来私淑千年承燕翼”，下联“居仁由义渊源百代仰先烈”，为著名书法家王学仲先生所题。"
		}
		],
		"jx001": [
		{
			"title": "嘉祥曾庙涌泉井现场教学",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "涌泉井位于曾庙的第一进院落的东部，是曾子六十九代孙、世袭翰林院五经博士曾毓墫于乾隆四十九年(1784年)，为纪念曾子侍亲至孝而建立。“涌泉”取《孝子传》“曾子行孝，枯井生泉”之意，意思是曾子的孝行感天动地，使“枯井生泉”；同时也隐喻曾子的孝道思想像涌泉之水长盛不衰，“施诸后世而无朝夕”。"
		}
		],
		"jx002": [
		{
			"title": "嘉祥曾庙宗圣殿现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1":"曾庙位于嘉祥县城南约20公里处的南武山南麓，占地40余亩，共有各类建筑70余间，分前后三进院落，中、东、西三路布局。",
			"desc2": "宗圣殿是曾庙的主体建筑，原名“忠孝祠”，始建于周考王十五年（公元前426年），明正统十年（公元1445年）重建后改称“宗圣殿”，明万历七年（公元1579年）扩建至现在规模。大殿面阔7间，长34米，进深18.8米，高15.3米，重檐九脊歇山式。大殿飞檐挑角，雕梁画栋。四周回廊中，22根水磨石柱，门前2根平雕云龙。顶覆绿瓦，大脊游龙蜿蜒。殿门上悬清雍正皇帝亲书“道传一贯”匾。殿内祀曾子彩色塑像，冠冕衮服，双手执圭。两侧有他的弟子子思和再传弟子孟子陪祀。"
		}
		],
		"jx003": [
		{
			"title": "嘉祥曾庙三省堂现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "三省堂位于曾庙东跨院内，与宗圣殿平行。始建于明万历七年（公元1579年），为五间悬山式建筑，面阔12.4米，进深9米，是纪念曾子“吾日三省吾身”之语而建。三省堂在民国年间倒坍，现存建筑为2003年重建。堂门上悬“三省堂”匾额，为曾氏后裔曾宪梓先生所题。"
		}
		],
		"jx004": [
		{
			"title": "嘉祥曾庙莱芜侯殿现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "莱芜侯殿，也称莱芜侯祠大殿，是祭祀曾子之父曾晳的专祠，位于曾庙西跨院内，与宗圣殿平行。莱芜侯殿为五间歇山式建筑，三踩抖拱，顶覆绿瓦，东西长20米，南北宽10米，高8米，殿中立有曾晳彩塑。殿前附有月台。殿后原有曾点寝殿，早期倒圮。"
		}
		],
		"jx005": [
		{
			"title": "嘉祥武氏祠现场教学点",
			"poster": "../images/jiax01.jpg",
			"src": "/u/cms/dtdjzx/201712/jxd.mp4",
			"desc1": "武氏祠位于山东省济宁市嘉祥县城南10公里的武翟山村，占地10余亩，始建于东汉桓帝、灵帝时期。武氏指的是东汉末年的武氏家族，较有名的有武梁、武开明、武班、武荣等，是当时的贵族，世代为官。他们的墓葬和祠堂称为武氏墓群，也称武氏祠。",
			"desc2": "武氏祠石刻是武氏家族墓群中的一组石刻建筑群，现存石阙、石狮各一对，汉碑2块，画像石刻46方。清乾隆时期，著名金石学家黄易等人进行了发掘清理，认为祠有4座，即武梁祠、前石室、后石室、左石室，除将其中“孔子见老子”一石移置济宁学宫外，皆就地建屋将画像石砌于壁间，外缭石垣，围双阙于内，题门额曰“武氏祠堂”。",
			"desc3": "武氏祠汉画像石雕刻精湛，内容丰富，是全国最大、保存最完整的汉画像石群，对后世的绘画及雕塑影响深远，被誉为研究中国历史的“百科全书”，它与埃及的金字塔、古希腊的瓶画并称“世界三绝”。"
		}
		]
	};
	var id = GetQueryString('video');
	var curVideo = data[id];
	var myTemplate = Handlebars.compile($("#tpl").html());
	$('.video').html(myTemplate(curVideo));
});