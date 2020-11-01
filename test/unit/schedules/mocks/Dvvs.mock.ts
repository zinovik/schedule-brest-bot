export const getDaysOfWeek = () => ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

export const getSchedule = () => ({
  title: 'Бассейн 50 м. (учебно-тренировочный)',
  subTitle: 'Количество дорожек для свободного плавания с 26.10.2020 по 01.11.2020',
  additionalInfo: 'Уважаемые посетители! С 31 августа по 31 декабря 2020 года в связи с подготовкой к чемпионату Европы на короткой воде бассейн 50 м. разделен на две 25-метровые ванны.',
  schedules: [
    {
      dayOfWeek: getDaysOfWeek()[0],
      times: [
        { start: '06:30', tracks: '13', session: '06:45_07:30' },
        { start: '07:15', tracks: '-', session: '07:30_08:15' },
        { start: '08:00', tracks: '1', session: '08:15_09:00' },
        { start: '08:45', tracks: '12', session: '09:00_09:45' },
        { start: '09:30', tracks: '14', session: '09:45_10:30' },
        { start: '10:15', tracks: '18', session: '10:30_11:15' },
        { start: '11:00', tracks: '18', session: '11:15_12:00' },
        { start: '11:45', tracks: 'Прыжковый 5', session: '12:00_12:45' },
        { start: '12:30', tracks: 'Прыжковый 5', session: '12:45_13:30' },
        { start: '13:15', tracks: '20', session: '13:30_14:15' },
        { start: '14:00', tracks: '8', session: '14:15_15:00' },
        { start: '14:45', tracks: '4', session: '15:00_15:45' },
        { start: '15:30', tracks: '2', session: '15:45_16:30' },
        { start: '16:15', tracks: '-', session: '16:30_17:15' },
        { start: '17:00', tracks: '8', session: '17:15_18:00' },
        { start: '17:45', tracks: '13', session: '18:00_18:45' },
        { start: '18:30', tracks: '1', session: '18:45_19:30' },
        { start: '19:15', tracks: '11', session: '19:30_20:15' },
        { start: '20:00', tracks: '15', session: '20:15_21:00' },
        { start: '20:45', tracks: '20', session: '21:00_21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[1],
      times: [
        { start: '06:30', tracks: '11', session: '06:45_07:30' },
        { start: '07:15', tracks: '4', session: '07:30_08:15' },
        { start: '08:00', tracks: '4', session: '08:15_09:00' },
        { start: '08:45', tracks: '9', session: '09:00_09:45' },
        { start: '09:30', tracks: '13', session: '09:45_10:30' },
        { start: '10:15', tracks: '19', session: '10:30_11:15' },
        { start: '11:00', tracks: '20', session: '11:15_12:00' },
        { start: '11:45', tracks: '20', session: '12:00_12:45' },
        { start: '12:30', tracks: '20', session: '12:45_13:30' },
        { start: '13:15', tracks: '20', session: '13:30_14:15' },
        { start: '14:00', tracks: '11', session: '14:15_15:00' },
        { start: '14:45', tracks: '12', session: '15:00_15:45' },
        { start: '15:30', tracks: '2', session: '15:45_16:30' },
        { start: '16:15', tracks: '-', session: '16:30_17:15' },
        { start: '17:00', tracks: '7', session: '17:15_18:00' },
        { start: '17:45', tracks: '5', session: '18:00_18:45' },
        { start: '18:30', tracks: '8', session: '18:45_19:30' },
        { start: '19:15', tracks: '1', session: '19:30_20:15' },
        { start: '20:00', tracks: '17', session: '20:15_21:00' },
        { start: '20:45', tracks: '20', session: '21:00_21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[2],
      times: [
        { start: '06:30', tracks: '13', session: '06:45_07:30' },
        { start: '07:15', tracks: '-', session: '07:30_08:15' },
        { start: '08:00', tracks: '2', session: '08:15_09:00' },
        { start: '08:45', tracks: '12', session: '09:00_09:45' },
        { start: '09:30', tracks: '11', session: '09:45_10:30' },
        { start: '10:15', tracks: '18', session: '10:30_11:15' },
        { start: '11:00', tracks: '20', session: '11:15_12:00' },
        { start: '11:45', tracks: 'Прыжковый 5', session: '12:00_12:45' },
        { start: '12:30', tracks: 'Прыжковый 5', session: '12:45_13:30' },
        { start: '13:15', tracks: '20', session: '13:30_14:15' },
        { start: '14:00', tracks: '8', session: '14:15_15:00' },
        { start: '14:45', tracks: '4', session: '15:00_15:45' },
        { start: '15:30', tracks: '3', session: '15:45_16:30' },
        { start: '16:15', tracks: '2', session: '16:30_17:15' },
        { start: '17:00', tracks: '3', session: '17:15_18:00' },
        { start: '17:45', tracks: '11', session: '18:00_18:45' },
        { start: '18:30', tracks: '6', session: '18:45_19:30' },
        { start: '19:15', tracks: '16', session: '19:30_20:15' },
        { start: '20:00', tracks: '17', session: '20:15_21:00' },
        { start: '20:45', tracks: '16', session: '21:00_21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[3],
      times: [
        { start: '06:30', tracks: '11', session: '06:45_07:30' },
        { start: '07:15', tracks: '4', session: '07:30_08:15' },
        { start: '08:00', tracks: '4', session: '08:15_09:00' },
        { start: '08:45', tracks: '11', session: '09:00_09:45' },
        { start: '09:30', tracks: '13', session: '09:45_10:30' },
        { start: '10:15', tracks: '19', session: '10:30_11:15' },
        { start: '11:00', tracks: '20', session: '11:15_12:00' },
        { start: '11:45', tracks: '20', session: '12:00_12:45' },
        { start: '12:30', tracks: '20', session: '12:45_13:30' },
        { start: '13:15', tracks: '20', session: '13:30_14:15' },
        { start: '14:00', tracks: '17', session: '14:15_15:00' },
        { start: '14:45', tracks: '15', session: '15:00_15:45' },
        { start: '15:30', tracks: '7', session: '15:45_16:30' },
        { start: '16:15', tracks: '3', session: '16:30_17:15' },
        { start: '17:00', tracks: '14', session: '17:15_18:00' },
        { start: '17:45', tracks: '7', session: '18:00_18:45' },
        { start: '18:30', tracks: '9', session: '18:45_19:30' },
        { start: '19:15', tracks: '5', session: '19:30_20:15' },
        { start: '20:00', tracks: '13', session: '20:15_21:00' },
        { start: '20:45', tracks: '18', session: '21:00_21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[4],
      times: [
        { start: '06:30', tracks: '13', session: '06:45_07:30' },
        { start: '07:15', tracks: '3', session: '07:30_08:15' },
        { start: '08:00', tracks: '1', session: '08:15_09:00' },
        { start: '08:45', tracks: '10', session: '09:00_09:45' },
        { start: '09:30', tracks: '13', session: '09:45_10:30' },
        { start: '10:15', tracks: '18', session: '10:30_11:15' },
        { start: '11:00', tracks: '18', session: '11:15_12:00' },
        { start: '11:45', tracks: 'Прыжковый 5', session: '12:00_12:45' },
        { start: '12:30', tracks: 'Прыжковый 5', session: '12:45_13:30' },
        { start: '13:15', tracks: '20', session: '13:30_14:15' },
        { start: '14:00', tracks: '11', session: '14:15_15:00' },
        { start: '14:45', tracks: '7', session: '15:00_15:45' },
        { start: '15:30', tracks: '3', session: '15:45_16:30' },
        { start: '16:15', tracks: '3', session: '16:30_17:15' },
        { start: '17:00', tracks: '9', session: '17:15_18:00' },
        { start: '17:45', tracks: '11', session: '18:00_18:45' },
        { start: '18:30', tracks: '7', session: '18:45_19:30' },
        { start: '19:15', tracks: '15', session: '19:30_20:15' },
        { start: '20:00', tracks: '20', session: '20:15_21:00' },
        { start: '20:45', tracks: '20', session: '21:00_21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[5],
      times: [
        { start: '06:30', tracks: '-', session: '06:45_07:30' },
        { start: '07:15', tracks: '8', session: '07:30_08:15' },
        { start: '08:00', tracks: '3', session: '08:15_09:00' },
        { start: '08:45', tracks: '2', session: '09:00_09:45' },
        { start: '09:30', tracks: '9', session: '09:45_10:30' },
        { start: '10:15', tracks: '14', session: '10:30_11:15' },
        { start: '11:00', tracks: '4', session: '11:15_12:00' },
        { start: '11:45', tracks: '9', session: '12:00_12:45' },
        { start: '12:30', tracks: '14', session: '12:45_13:30' },
        { start: '13:15', tracks: '11', session: '13:30_14:15' },
        { start: '14:00', tracks: '19', session: '14:15_15:00' },
        { start: '14:45', tracks: '20', session: '15:00_15:45' },
        { start: '15:30', tracks: '17', session: '15:45_16:30' },
        { start: '16:15', tracks: '20', session: '16:30_17:15' },
        { start: '17:00', tracks: '16', session: '17:15_18:00' },
        { start: '17:45', tracks: '20', session: '18:00_18:45' },
        { start: '18:30', tracks: '20', session: '18:45_19:30' },
        { start: '19:15', tracks: '20', session: '19:30_20:15' },
        { start: '20:00', tracks: '-', session: '20:15_21:00' },
        { start: '20:45', tracks: '-', session: '21:00_21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[6],
      times: [
        { start: '06:30', tracks: '-', session: '06:45_07:30' },
        { start: '07:15', tracks: '-', session: '07:30_08:15' },
        { start: '08:00', tracks: '-', session: '08:15_09:00' },
        { start: '08:45', tracks: '20', session: '09:00_09:45' },
        { start: '09:30', tracks: '20', session: '09:45_10:30' },
        { start: '10:15', tracks: '20', session: '10:30_11:15' },
        { start: '11:00', tracks: '20', session: '11:15_12:00' },
        { start: '11:45', tracks: '20', session: '12:00_12:45' },
        { start: '12:30', tracks: '17', session: '12:45_13:30' },
        { start: '13:15', tracks: '17', session: '13:30_14:15' },
        { start: '14:00', tracks: '20', session: '14:15_15:00' },
        { start: '14:45', tracks: '20', session: '15:00_15:45' },
        { start: '15:30', tracks: '20', session: '15:45_16:30' },
        { start: '16:15', tracks: '20', session: '16:30_17:15' },
        { start: '17:00', tracks: '18', session: '17:15_18:00' },
        { start: '17:45', tracks: '-', session: '18:00_18:45' },
        { start: '18:30', tracks: '-', session: '18:45_19:30' },
        { start: '19:15', tracks: '-', session: '19:30_20:15' },
        { start: '20:00', tracks: '-', session: '20:15_21:00' },
        { start: '20:45', tracks: '-', session: '21:00_21:45' },
      ],
    },
  ],
});

export const getPageMock = () => `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<!--[if IE 6]>
	<meta http-equiv="Refresh" content="0; URL=include/ie6/ie6.html" /><![endif]-->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="robots" content="index, follow" />
<meta name="keywords" content="Keywords" />
<meta name="description" content="Description" />
<link href="/bitrix/cache/css/s1/inner/kernel/kernel.css?1597678111" type="text/css" rel="stylesheet" />
<script type="text/javascript"> var arKernelCSS = new Array('/bitrix/js/main/core/css/core.css','/bitrix/js/main/core/css/core_popup.css','/bitrix/js/fileman/sticker.css','/bitrix/js/main/core/css/core_panel.css','/bitrix/js/socialservices/css/ss.css','/bitrix/js/main/core/css/core_tooltip.css','/bitrix/js/main/core/css/core_date.css'); </script><link href="/bitrix/cache/css/s1/inner/template_af409cffe79dccd662306f47851ed6e2/template_af409cffe79dccd662306f47851ed6e2_e6616f385ce5b3efa4d4a1159e28ff7f.css?1597997531" type="text/css" rel="stylesheet" />

<script type="text/javascript">if(!window.BX)window.BX={message:function(mess){if(typeof mess=='object') for(var i in mess) BX.message[i]=mess[i]; return true;}};</script><script type="text/javascript">(window.BX||top.BX).message({'LANGUAGE_ID':'ru','FORMAT_DATE':'DD.MM.YYYY','FORMAT_DATETIME':'DD.MM.YYYY HH:MI:SS','COOKIE_PREFIX':'BITRIX_SM','USER_ID':'','SERVER_TIME':'1604231979','SERVER_TZ_OFFSET':'10800','USER_TZ_OFFSET':'0','USER_TZ_AUTO':'Y','bitrix_sessid':'f34cd907f9979d9ba13078fbcca94cfb','SITE_ID':'s1'});(window.BX||top.BX).message({'JS_CORE_LOADING':'Загрузка...','JS_CORE_NO_DATA':'- Нет данных -','JS_CORE_WINDOW_CLOSE':'Закрыть','JS_CORE_WINDOW_EXPAND':'Развернуть','JS_CORE_WINDOW_NARROW':'Свернуть в окно','JS_CORE_WINDOW_SAVE':'Сохранить','JS_CORE_WINDOW_CANCEL':'Отменить','JS_CORE_H':'ч','JS_CORE_M':'м','JS_CORE_S':'с','JSADM_AI_HIDE_EXTRA':'Скрыть лишние','JSADM_AI_ALL_NOTIF':'Показать все','JSADM_AUTH_REQ':'Требуется авторизация!','JS_CORE_WINDOW_AUTH':'Войти','JS_CORE_IMAGE_FULL':'Полный размер'});</script>
<script type="text/javascript" src="/bitrix/cache/js/s1/inner/kernel/kernel.js?1597678111"></script>
<script type="text/javascript"> BX.setKernelJS(['/bitrix/js/main/core/core.js','/bitrix/js/main/core/core_ajax.js','/bitrix/js/main/session.js','/bitrix/js/main/core/core_popup.js','/bitrix/js/main/core/core_fx.js','/bitrix/js/main/core/core_window.js','/bitrix/js/main/utils.js','/bitrix/js/main/popup_menu.js','/bitrix/js/socialservices/ss.js','/bitrix/js/main/ajax.js','/bitrix/js/main/core/core_tooltip.js','/bitrix/js/main/core/core_date.js','/bitrix/js/main/cphttprequest.js']); </script><script type="text/javascript">
bxSession.Expand(1440, 'f34cd907f9979d9ba13078fbcca94cfb', false, '70f1efb689c19187f1b9055127bc3c96');
</script>

<!--Openstat--><span id="openstat2373824"></span><script type="text/javascript">var openstat={counter:2373824,next:openstat};(function(d,t){var j=d.createElement(t);j.async=true;j.type="text/javascript";j.src="//openstat.net/cnt.js";var s=d.getElementsByTagName(t)[0];s.parentNode.insertBefore(j,s)})(document,"script")</script><!--/Openstat-->
<script type="text/javascript" src="/bitrix/cache/js/s1/inner/template_b669808a41a4826644678ba184a7f410/template_b669808a41a4826644678ba184a7f410_d4f9fd3227d4f08b41ed3acfa0fdcadb.js?1570088194"></script>

	<title>Расписание сеансов</title>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	<!-- Main Style Site -->
		<!-- Main JavaScript-->
		<script type="text/javascript">
		var search_url = "/search/";
		$(document).ready(function(){
			$(".re-view-image").fancybox({});
			$('.main-select-style').styler();
			$(".header-container__language__item").click(function(){
				if ($(this).children("a").attr("href") !== undefined)
					location = $(this).children("a").attr("href");
			});
		});
	</script>
</head>

<body>
<div id="wrapper">

	
	<div id="header">
		<div class="header-container">
			<div class="header-container__logo">
				<a class="header-container__logo__link" href="/"></a>
				<img src="/bitrix/templates/.default/image/elements/logo.png" alt=""/>
			</div>
			<a href="/" class="header-container__logo__text">
	ГСУСУ  "Брестский областной центр олимпийского резерва по водным видам спорта"
</a>			<style>
	.header-container__search
	{
		width: 250px;
	}
	.header-container__search__dropdown__top-fix
	{
		width: 250px;
	}
	.header-container__search__input
	{
		width: 215px;
	}
</style>
			<div class="header-container__search">
				<input class="header-container__search__input" type="text" placeholder="Поиск"/>
				<input class="header-container__search__submit" type="submit" value=""/>
				<ul class="header-container__search__dropdown"></ul>
			</div>
		</div>
	</div><!-- #header-->
	
<div id="nav">
	<div class="nav-container">
		<ul class="nav-container__block">
			<li class="nav-container__block__box">
				<a class="nav-container__block__link home__paddind" href="/">
					<div class="nav-container__home"></div>
				</a>
			</li>
						<li class="nav-container__block__box"><a class="nav-container__block__link" href="/about/">О центре</a></li>
						<li class="nav-container__block__box"><a class="nav-container__block__link" href="/about/fyi/">Правила посещения</a></li>
						<li class="nav-container__block__box"><a class="nav-container__block__link" href="http://brest-dvvs.by/zapis/">НАБОР 2020</a></li>
						<li class="nav-container__block__box activ"><a class="nav-container__block__link" href="/sched/index.php">Расписание</a></li>
						<li class="nav-container__block__box"><a class="nav-container__block__link" href="/contacts/">Контакты</a></li>
						<li class="nav-container__block__box"><a class="nav-container__block__link" href="/sched/price.php">Прейскурант</a></li>
						<li class="nav-container__block__box"><a class="nav-container__block__link" href="http://brest-dvvs.by/services/dopolnitelnye_uslugi/Hotel/gostinitsa/">Гостиница</a></li>
					</ul>
		<div class="clear"></div>
	</div>
	<div class="nav-bottom-shadow"></div>
</div>
	
		
	<div id="content">
	<div class="content-title content-title-min-bottom"><h2></h2></div>	 
<div style="text-align: center;"><font size="5" color="#f16522"><b>Больше информации в социальных сетях:</b></font> <a href="https://www.Facebook.com/dvvsbrest" target="_blank" > <img src="/contacts/Facebook.png" hspace="10" align="middle" width="40" height="40"  /></a><a href="https://www.instagram.com/dvvsbrest/" target="_blank" ><img src="/contacts/Instagram.png" hspace="10" align="middle" width="40" height="40"  /></a><a href="https://vk.com/dvvsbrest" target="_blank" ><img src="/contacts/Vk.png" hspace="10" align="middle" width="40" height="40"  /></a></div>
 
<div id="section-3" class="detailed-description__category__title"> Расписание сеансов <img class="info" src="/bitrix/templates/.default/image/icons/title-category-img-3.png"  /> </div>
 
<style>
  .table-style__block{width:auto;}
</style>
  
<br />
 
<table width="100%" height="80" cellspacing="0" cellpadding="0" border="0" align="center"> 
  <tbody> 
    <tr align="center"><td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#F16522"><font size="6" color="#FFFFFF"> 
          <br />
         <b>Бассейн 50 м. (учебно-тренировочный)</b></font></td> </tr>
   </tbody>
 </table>
  
<div><font size="4" color="#FF0000"><b><i>Уважаемые посетители! С 31 августа по 31 декабря 2020 года в связи с подготовкой к чемпионату Европы на короткой воде бассейн 50 м. разделен на две 25-метровые ванны.</i></b></font></div>
 
<table width="100%" cellspacing="0" cellpadding="0" border="1" align="center"> 
  <tbody> 
    <tr align="center"><td colspan="9" bgcolor="#0072bc"> 
        <p><b><font size="5" color="#ffffff">Количество дорожек для свободного плавания с 26.10.2020 по 01.11.2020</font></b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>Пуск</b></p>
       </td><td> 
        <p><b>Сеанс</b></p>
       </td><td> 
        <p><b>Пн.</b></p>
       </td><td> 
        <p><b>Вт.</b></p>
       </td><td> 
        <p><b>Ср.</b></p>
       </td><td> 
        <p><b>Чт.</b></p>
       </td><td> 
        <p><b>Пт.</b></p>
       </td><td> 
        <p><b>Сб.</b></p>
       </td><td> 
        <p><b>Вс.</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>06:30</b></p>
       </td><td> 
        <p><b>06:45_07:30</b></p>
       </td><td> 
        <p><b>13</b></p>
       </td><td> 
        <p><b>11</b></p>
       </td><td> 
        <p><b>13</b></p>
       </td><td> 
        <p><b>11</b></p>
       </td><td> 
        <p><b>13</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>07:15</b></p>
       </td><td> 
        <p><b>07:30_08:15</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>4</b> 
          <br />
        </p>
       </td><td> 
        <p><b>3</b> 
          <br />
        </p>
       </td><td> 
        <p><b>8</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>08:00</b></p>
       </td><td> 
        <p><b>08:15_09:00</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>1</b> 
          <br />
        </p>
       </td><td> 
        <p><b>3</b> 
          <br />
        </p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>08:45</b></p>
       </td><td> 
        <p><b>09:00_09:45</b></p>
       </td><td> 
        <p><b>12</b></p>
       </td><td> 
        <p><b>9</b></p>
       </td><td> 
        <p><b>12</b></p>
       </td><td> 
        <p><b>11</b></p>
       </td><td> 
        <p><b>10</b></p>
       </td><td> 
        <p><b>2</b> 
          <br />
        </p>
       </td><td> 
        <p><b>20</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>09:30</b></p>
       </td><td> 
        <p><b>09:45_10:30</b></p>
       </td><td> 
        <p><b>14</b></p>
       </td><td> 
        <p><b>13</b></p>
       </td><td> 
        <p><b>11</b></p>
       </td><td> 
        <p><b>13</b></p>
       </td><td> 
        <p><b>13</b></p>
       </td><td> 
        <p><b>9</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>10:15</b></p>
       </td><td> 
        <p><b>10:30_11:15</b></p>
       </td><td> 
        <p><b>18</b></p>
       </td><td> 
        <p><b>19</b></p>
       </td><td> 
        <p><b>18</b></p>
       </td><td> 
        <p><b>19</b></p>
       </td><td> 
        <p><b>18</b></p>
       </td><td> 
        <p><b>14</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>11:00</b></p>
       </td><td> 
        <p><b>11:15_12:00</b></p>
       </td><td> 
        <p><b>18</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>18</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>11:45</b></p>
       </td><td> 
        <p><b>12:00_12:45</b></p>
       </td><td> 
        <p><b>Прыжковый 5</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>Прыжковый 5</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>Прыжковый 5</b></p>
       </td><td> 
        <p><b>9</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>12:30</b></p>
       </td><td> 
        <p><b>12:45_13:30</b></p>
       </td><td> 
        <p><b>Прыжковый 5</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>Прыжковый 5</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>Прыжковый 5</b></p>
       </td><td> 
        <p><b>14</b></p>
       </td><td> 
        <p><b>17</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>13:15</b></p>
       </td><td> 
        <p><b>13:30_14:15</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>11</b></p>
       </td><td> 
        <p><b>17</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>14:00</b></p>
       </td><td> 
        <p><b>14:15_15:00</b></p>
       </td><td> 
        <p><b>8</b></p>
       </td><td> 
        <p><b>11</b></p>
       </td><td> 
        <p><b>8</b></p>
       </td><td> 
        <p><b>17</b></p>
       </td><td> 
        <p><b>11</b></p>
       </td><td> 
        <p><b>19</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>14:45</b></p>
       </td><td> 
        <p><b>15:00_15:45</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>12</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>15</b> 
          <br />
         </p>
       </td><td> 
        <p><b>7</b> 
          <br />
         </p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>15:30</b></p>
       </td><td> 
        <p><b>15:45_16:30</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>3</b></p>
       </td><td> 
        <p><b>7</b> 
          <br />
        </p>
       </td><td> 
        <p><b>3</b> 
          <br />
         </p>
       </td><td> 
        <p><b>17</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>16:15</b></p>
       </td><td> 
        <p><b>16:30_17:15</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>3</b> 
          <br />
        </p>
       </td><td> 
        <p><b>3</b> 
          <br />
        </p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>17:00</b></p>
       </td><td> 
        <p><b>17:15_18:00</b></p>
       </td><td> 
        <p><b>8</b></p>
       </td><td> 
        <p><b>7</b></p>
       </td><td> 
        <p><b>3</b></p>
       </td><td> 
        <p><b>14</b></p>
       </td><td> 
        <p><b>9</b></p>
       </td><td> 
        <p><b>16</b> </p>
       </td><td> 
        <p><b>18</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>17:45</b></p>
       </td><td> 
        <p><b>18:00_18:45</b></p>
       </td><td> 
        <p><b>13</b></p>
       </td><td> 
        <p><b>5</b></p>
       </td><td> 
        <p><b>11</b></p>
       </td><td> 
        <p><b>7</b></p>
       </td><td> 
        <p><b>11</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>18:30</b></p>
       </td><td> 
        <p><b>18:45_19:30</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>8</b></p>
       </td><td> 
        <p><b>6</b> 
          <br />
        </p>
       </td><td> 
        <p><b>9</b></p>
       </td><td> 
        <p><b>7</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>19:15</b></p>
       </td><td> 
        <p><b>19:30_20:15</b></p>
       </td><td> 
        <p><b>11</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>16</b></p>
       </td><td> 
        <p><b>5</b></p>
       </td><td> 
        <p><b>15</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>20:00</b></p>
       </td><td> 
        <p><b>20:15_21:00</b></p>
       </td><td> 
        <p><b>15</b></p>
       </td><td> 
        <p><b>17</b></p>
       </td><td> 
        <p><b>17</b></p>
       </td><td> 
        <p><b>13</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>20:45</b></p>
       </td><td> 
        <p><b>21:00_21:45</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>16</b></p>
       </td><td> 
        <p><b>18</b></p>
       </td><td> 
        <p><b>20</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   </tbody>
 </table>
  
<br />
 
<br />
   
<table width="100%" height="80" cellspacing="0" cellpadding="0" border="0" align="center"> 
  <tbody> 
    <tr align="center"><td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#F16522"><font size="6" color="#FFFFFF"> 
          <br />
         <b>Бассейн 25 м. (физкультурно-оздоровительный)</b></font></td></tr>
   </tbody>
 </table>
  
<table width="100%" cellspacing="0" cellpadding="0" border="1" align="center"> 
  <tbody> 
    <tr align="center"> <td colspan="9" bgcolor="#0072bc"> 
        <p><b><font size="5" color="#ffffff">Количество дорожек для свободного плавания с 26.10.2020 по 01.11.2020</font></b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>Пуск</b></p>
       </td><td> 
        <p><b>Сеанс</b></p>
       </td><td> 
        <p><b>Пн.</b></p>
       </td><td> 
        <p><b>Вт.</b></p>
       </td><td> 
        <p><b>Ср.</b></p>
       </td><td> 
        <p><b>Чт.</b></p>
       </td><td> 
        <p><b>Пт.</b></p>
       </td><td> 
        <p><b>Сб.</b></p>
       </td><td> 
        <p><b>Вс.</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>07:15</b></p>
       </td><td> 
        <p><b>07:30_08:15</b></p>
       </td><td><b>4</b></td><td> 
        <p><b>1</b> 
          <br />
        </p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>08:00</b></p>
       </td><td> 
        <p><b>08:15_09:00</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>1</b> 
          <br />
         </p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>1</b> 
          <br />
         </p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>08:45</b></p>
       </td><td> 
        <p><b>09:00_09:45</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>09:30</b></p>
       </td><td> 
        <p><b>09:45_10:30</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>10:15</b></p>
       </td><td> 
        <p><b>10:30_11:15</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>3</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>11:00</b></p>
       </td><td> 
        <p><b>11:15_12:00</b></p>
       </td><td> 
        <p><b>-</b> 
          <br />
         </p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>11:45</b></p>
       </td><td> 
        <p><b>12:00_12:45</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>12:30</b></p>
       </td><td> 
        <p><b>12:45_13:30</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>13:15</b></p>
       </td><td> 
        <p><b>13:30_14:15</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>14:00</b></p>
       </td><td> 
        <p><b>14:15_15:00</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>14:45</b></p>
       </td><td> 
        <p><b>15:00_15:45</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>3</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>15:30</b></p>
       </td><td> 
        <p><b>15:45_16:30</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>1</b> 
          <br />
         </p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>3</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>16:15</b></p>
       </td><td> 
        <p><b>16:30_17:15</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>2</b> 
          <br />
         </p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>3</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>17:00</b></p>
       </td><td> 
        <p><b>17:15_18:00</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>3</b></p>
       </td><td> 
        <p><b>3</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>17:45</b></p>
       </td><td> 
        <p><b>18:00_18:45</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>3</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>18:30</b></p>
       </td><td> 
        <p><b>18:45_19:30</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>3</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>19:15</b></p>
       </td><td> 
        <p><b>19:30_20:15</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>1</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>20:00</b></p>
       </td><td> 
        <p><b>20:15_21:00</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>20:45</b></p>
       </td><td> 
        <p><b>21:00_21:45</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>4</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>2</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   </tbody>
 </table>
  
<br />
 
<br />
  
<br />
 
<table width="100%" height="80" cellspacing="0" cellpadding="0" border="0" align="center"> 
  <tbody> 
    <tr align="center"><td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#F16522"><font size="6" color="#FFFFFF"> 
          <br />
         <b>Бассейн &quot;Малютка&quot; (детский)</b></font></td></tr>
   </tbody>
 </table>
  
<div><font size="4" color="#FF0000"><b><i>Уважаемые посетители! Обращаем внимание, что осуществляется запись на &quot;Оздоровительное плавание малыша с родителем&quot; в бассейне &quot;Малютка&quot; по номеру телефона 32-20-25</i></b></font></div>
 
<table width="100%" cellspacing="0" cellpadding="0" border="1" align="center"> 
  <tbody> 
    <tr align="center"> <td colspan="9" bgcolor="#0072bc"> 
        <p><b><font size="5" color="#ffffff">Наличие сеансов &quot;</font></b><font size="5" color="#ffffff"><i>Оздоровительное плавание малыша с родителем</i></font><b><font size="5" color="#ffffff">&quot; 
              <br />
             с 26.10.2020 по 01.11.2020</font></b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>Пуск</b></p>
       </td><td> 
        <p><b>Сеанс</b></p>
       </td><td> 
        <p><b>Пн.</b></p>
       </td><td> 
        <p><b>Вт.</b></p>
       </td><td> 
        <p><b>Ср.</b></p>
       </td><td> 
        <p><b>Чт.</b></p>
       </td><td> 
        <p><b>Пт.</b></p>
       </td><td> 
        <p><b>Сб.</b></p>
       </td><td> 
        <p><b>Вс.</b></p>
       </td></tr>
   
    <tr><td colspan="1" align="center"><b>08:45</b></td><td colspan="1" align="center"><b>09:00_09:45</b></td><td colspan="1" align="center">-</td><td colspan="1" align="center">-</td><td colspan="1" align="center">-</td><td colspan="1" align="center">-</td><td colspan="1" align="center">-</td><td colspan="1" align="center">-</td><td colspan="1" align="center">-</td></tr>
   
    <tr align="center"><td> 
        <p><b>09:30</b></p>
       </td><td> 
        <p><b>09:45_10:30</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>10:15</b></p>
       </td><td> 
        <p><b>10:30_11:15</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>11:00</b></p>
       </td><td> 
        <p><b>11:15_12:00</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>11:45</b></p>
       </td><td> 
        <p><b>12:00_12:45</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем </p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем </p>
       </td><td> 
        <p><b>-</b></p>
       </td><td align="center"><b>-</b></td></tr>
   
    <tr align="center"> <td> 
        <p><b>12:30</b></p>
       </td><td> 
        <p><b>12:45_13:30</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p>-</p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>13:15</b></p>
       </td><td> 
        <p><b>13:30_14:15</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td> <td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>14:00</b></p>
       </td><td> 
        <p><b>14:15_15:00</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>14:45</b></p>
       </td><td> 
        <p><b>15:00_15:45</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем </p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем </p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b> </p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>15:30</b></p>
       </td><td> 
        <p><b>15:45_16:30</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем </p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем </p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем </p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p><b>-</b> </p>
       </td><td> 
        <p>-</p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>16:15</b></p>
       </td><td> 
        <p><b>16:30_17:15</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем </p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>-</p>
       </td><td> 
        <p>-</p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>17:00</b></p>
       </td><td> 
        <p><b>17:15_18:00</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем </p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>17:45</b></p>
       </td><td> 
        <p><b>18:00_18:45</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>18:30</b></p>
       </td><td> 
        <p><b>18:45_19:30</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>19:15</b></p>
       </td><td> 
        <p><b>19:30_20:15</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем</p>
       </td><td> 
        <p>Оздоровительное плавание малыша с родителем </p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>20:00</b></p>
       </td><td> 
        <p><b>20:15_21:00</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td><td> 
        <p><b>-</b></p>
       </td></tr>
   </tbody>
 </table>
  
<br />
 
<br />
  
<br />
 
<table width="100%" height="80" cellspacing="0" cellpadding="0" border="0" align="center"> 
  <tbody> 
    <tr align="center"><td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#F16522"><font size="6" color="#FFFFFF"> 
          <br />
         <b>Тренажёрный зал &quot;Light&quot;</b></font></td> </tr>
   </tbody>
 </table>
  
<table width="100%" cellspacing="0" cellpadding="0" border="1" align="center"> 
  <tbody> 
    <tr align="center"><td colspan="5" bgcolor="#0072BC"> <font color="#FFFFFF"><b><font size="6">с 26.10.2020 по 01.11.2020</font></b></font> 
        <br />
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>Понедельник</b></p>
       </td> <td> 
        <p><b>Вторник</b></p>
       </td> <td> 
        <p><b>Среда</b></p>
       </td> <td> 
        <p><b>Четверг</b></p>
       </td> <td> 
        <p><b>Пятница</b></p>
       </td> </tr>
   
    <tr align="center"><td bgcolor="#6CCFF7"> 
        <p>Степусь Ольга 
          <br />
         <b>Силовой тренинг</b> 
          <br />
         18:30_20:00</p>
       </td><td></td><td bgcolor="#6CCFF7"> 
        <p> Степусь Ольга 
          <br />
         <b> Силовой тренинг</b> 
          <br />
         18:30_20:00</p>
       </td><td> 
        <br />
       </td><td bgcolor=""> 
        <p> 
          <br />
         </p>
       </td></tr>
   
    <tr align="center"><td bgcolor="#FFF799"> 
        <p>Асеева Лариса 
          <br />
         <b>Фитнес + тренажеры</b> 
          <br />
         20:00_21:30</p>
       </td><td></td><td bgcolor="#FFF799"> 
        <p>Асеева Лариса 
          <br />
         <b>Фитнес + тренажеры</b> 
          <br />
         20:00_21:30</p>
       </td><td></td><td bgcolor=""> 
        <p> 
          <br />
         </p>
       </td></tr>
   </tbody>
 </table>
  
<br />
 
<br />
  
<br />
 
<table width="100%" height="80" cellspacing="0" cellpadding="0" border="0" align="center"> 
  <tbody> 
    <tr align="center"><td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#F16522"><font size="6" color="#FFFFFF"> 
          <br />
         <b>Аквааэробика</b></font></td></tr>
   </tbody>
 </table>
  
<div><font size="4" color="#FF0000"><b><i>Обращаем ваше внимание, что осуществляется запись на услугу &quot;Аквааэробика&quot; в день проведения занятия. 
        <br />
       Телефоны для записи: бассейн 25м (мелкий) 32-20-25; бассейн 50м (глубокий) 32-20-50.</i></b></font></div>
 
<table width="100%" cellspacing="0" cellpadding="0" border="1" align="center"> 
  <tbody> 
    <tr> <td colspan="6" bgcolor="#0072BC" align="center"> 
        <p><b><font size="6" color="#FFFFFF">с 26.10.2020 по 01.11.2020</font></b></p>
       </td></tr>
   
    <tr align="center"> <td> 
        <p><b>Время</b></p>
       </td><td> 
        <p><b>Вторник</b></p>
       </td><td> 
        <p><b>Среда</b></p>
       </td><td> 
        <p><b>Четверг</b></p>
       </td><td> 
        <p><b>Пятница</b></p>
       </td><td> 
        <p><b>Суббота</b></p>
       </td></tr>
   
    <tr align="center"> <td colspan="6"> 
        <p><b><font color="#f16522">БАССЕЙН 25м (мелкий)</font></b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>11:45_12:45</b></p>
       </td><td></td><td></td><td></td><td></td><td bgcolor="#FFF799"> 
        <p><b>Щепко Лариса</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>17:45_18:45</b></p>
       </td><td></td><td bgcolor="#FFF799"> 
        <p><b>Щепко Лариса</b></p>
       </td><td></td><td></td><td></td></tr>
   
    <tr align="center"><td> 
        <p><b>18:30_19:30</b></p>
       </td><td bgcolor="#C6DF9C"> 
        <p><b>Конончик Марина</b></p>
       </td><td bgcolor="#FFF799"> 
        <p><b>Щепко Лариса</b></p>
       </td><td bgcolor="#C6DF9C"> 
        <p><b>Конончик Марина</b></p>
       </td><td bgcolor=""> 
        <p> 
          <br />
         </p>
       </td><td></td></tr>
   
    <tr align="center"><td> 
        <p><b>19:15_20:15</b></p>
       </td><td></td><td></td><td></td><td bgcolor=""> 
        <p> 
          <br />
         </p>
       </td><td></td></tr>
   
    <tr align="center"> <td colspan="6"> 
        <p><b><font color="#f16522">БАССЕЙН 50м (глубокий)</font></b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>19:15_20:15</b></p>
       </td><td bgcolor="#C6DF9C"> 
        <p><b>Конончик Марина</b></p>
       </td><td bgcolor="#FFF799"> 
        <p><b>Щепко Лариса</b> </p>
       </td><td bgcolor="#C6DF9C"><b>Конончик Марина</b></td><td></td><td></td></tr>
   
    <tr align="center"><td> 
        <p><b>12<b>:</b>30_13<b>:</b>30</b></p>
       </td><td></td><td></td><td></td><td></td><td bgcolor="#FFF799"> 
        <p><b>Щепко Лариса</b></p>
       </td></tr>
   </tbody>
 </table>
  
<br />
 
<br />
  
<br />
 
<table width="100%" height="80" cellspacing="0" cellpadding="0" border="0" align="center"> 
  <tbody> 
    <tr align="center"><td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#F16522"><font size="6" color="#FFFFFF"> 
          <br />
         <b>Фитнес</b></font></td></tr>
   </tbody>
 </table>
  
<table width="100%" cellspacing="0" cellpadding="0" border="1" bgcolor="" align="center"> 
  <tbody> 
    <tr align="center"><td colspan="6" bgcolor="#0072BC"><font size="6" color="#FFFFFF"><b>с 26.10.2020 по 01.11.2020</b></font> </td></tr>
   
    <tr align="center"><td><b>Время</b></td><td> 
        <p><b>Понедельник</b></p>
       </td><td> 
        <p><b>Вторник</b></p>
       </td><td> 
        <p><b>Среда</b></p>
       </td><td> 
        <p><b>Четверг</b></p>
       </td><td> 
        <p><b>Пятница</b></p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b> 18:00_19:00 </b></p>
       </td><td bgcolor="#FFF799"> 
        <p><b> Асеева Лариса</b> 
          <br />
         Фитнес-баланс</p>
       </td><td></td><td bgcolor="#FFF799"> 
        <p><b> Асеева Лариса</b> 
          <br />
         Флексислим</p>
       </td><td></td><td bgcolor=""> 
        <p> 
          <br />
         </p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>19:00_20:00</b></p>
       </td><td bgcolor="#C6DF9C"> 
        <p><b>Криштофик Инна</b> 
          <br />
         Step &amp; Sculpt</p>
       </td><td> 
        <br />
       </td><td bgcolor="#C6DF9C"> 
        <p><b>Криштофик Инна</b> 
          <br />
         Super press</p>
       </td><td></td><td bgcolor=""> 
        <p> 
          <br />
         </p>
       </td></tr>
   
    <tr align="center"><td> 
        <p><b>20:00_21:00</b></p>
       </td><td bgcolor="#C6DF9C"> 
        <p><b>Криштофик Инна</b> 
          <br />
         Пилатес + растяжка</p>
       </td><td></td><td bgcolor="#C6DF9C"> 
        <p><b>Криштофик Инна</b> 
          <br />
         Пилатес + сила</p>
       </td><td></td><td bgcolor=""> 
        <p> 
          <br />
         </p>
       </td></tr>
   </tbody>
 </table>
  
<br />
 
<br />
 
	</div>
</div><!-- #wrapper -->


<div id="footer">
	<div class="footer-top-shadow"></div>
	



<div class="footer-container" style="  position: relative;">
<div  class="footer-container__block"><div class="footer-container__block__title footer-block-icon-map">Контакты</div>			<div class="footer-container__block__text">
				
<div>224023 г.Брест, ул. Московская 147</div>
 
<div>Администраторы:<i> 
    <br />
   </i>Тел.:<i>32-20-24 (Холл)</i> 
  <br />
 Тел.:<i>32-20-25 (Бассейн 25м)</i> 
  <br />
 Тел.:<i>32-20-50 (Бассейн 50м)</i> 
  <br />
 </div>
 
<div> 
  <br />
 </div>
 
<div>Приемная:</div>
 
<div>Тел./факс: (<i>+375 162) 32-20-00 
    <br />
   </i></div>
 
<div>E-mail: <i>secretar@brest-dvvs.by</i></div>
			</div>
		</div><div  class="footer-container__block"><div class="footer-container__block__title footer-block-icon-info">О центре</div><a class="footer-container__block__link" href="/about/window/">Одно окно</a><a class="footer-container__block__link" href="/about/events/">События</a><a class="footer-container__block__link" href="/about/promotions/">Акции</a><a class="footer-container__block__link" href="/about/fyi/">Правила посещения</a><a class="footer-container__block__link" href="/about/vacancies/">Вакансии</a><a class="footer-container__block__link" href="/about/faq/">Часто задаваемые вопросы</a></div><div  class="footer-container__block"><div class="footer-container__block__title footer-block-icon-flag">Деятельность</div><a class="footer-container__block__link" href="/services/uslugi_fizicheskoy_kultury/">Услуги физической культуры</a><a class="footer-container__block__link" href="/services/vodnye_vidy_sporta/">Спорт</a><a class="footer-container__block__link" href="/services/dopolnitelnye_uslugi/">Услуги "Центра"</a><a class="footer-container__block__link" href="/rec/">Запись на услугу</a></div><div  class="footer-container__block remove__padding"><div class="footer-container__block__title footer-block-icon-keys">Клиентам</div><a class="footer-container__block__link" href="/for_legal_entities/">Информация</a><a class="footer-container__block__link" href="/for_legal_entities/applications/">Заявки</a><a class="footer-container__block__link" href="/for_legal_entities/treaty/">Договор</a><a class="footer-container__block__link" href="http://mfa.gov.by">Спорт в Беларуси</a><a class="footer-container__block__link" href="/for_legal_entities/zoj/">Пропаганда ЗОЖ</a><a class="footer-container__block__link" href="/for_legal_entities/Anketa/">Анкета резервного списка</a></div>





	
<div class="progg_by" style="  margin-top: 85px;"><a href="https://atevi.by/" target="_blank">Разработка сайта: Atevi.by</a></div>
</div></div><!-- #footer --><!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(66622354, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/66622354" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</body>

</html>`;
