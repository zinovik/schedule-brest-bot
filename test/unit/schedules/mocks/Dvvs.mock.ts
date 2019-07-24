export const getDaysOfWeek = () => ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

export const getSchedule = () => ({
  title: 'Бассейн 50 м. (учебно-тренировочный)',
  subTitle: 'Наличие дорожек для свободного плавания с 22.07.2019 по 28.07.2019',
  additionalInfo: '',
  schedules: [
    {
      dayOfWeek: getDaysOfWeek()[0],
      times: [
        { start: '06:30', tracks: '10', session: '06:45-07:30' },
        { start: '07:15', tracks: '10', session: '07:30-08:15' },
        { start: '08:00', tracks: '10', session: '08:15-09:00' },
        { start: '08:45', tracks: '10', session: '09:00-09:45' },
        { start: '09:30', tracks: '10', session: '09:45-10:30' },
        { start: '10:15', tracks: '10', session: '10:30-11:15' },
        { start: '11:00', tracks: '10', session: '11:15-12:00' },
        { start: '11:45', tracks: '10', session: '12:00-12:45' },
        { start: '12:30', tracks: '10', session: '12:45-13:30' },
        { start: '13:15', tracks: '-', session: '13:30-14:15' },
        { start: '14:00', tracks: '-', session: '14:15-15:00' },
        { start: '14:45', tracks: '10', session: '15:00-15:45' },
        { start: '15:30', tracks: '10', session: '15:45-16:30' },
        { start: '16:15', tracks: '10', session: '16:30-17:15' },
        { start: '17:00', tracks: '10', session: '17:15-18:00' },
        { start: '17:45', tracks: '10', session: '18:00-18:45' },
        { start: '18:30', tracks: '10', session: '18:45-19:30' },
        { start: '19:15', tracks: '9', session: '19:30-20:15' },
        { start: '20:00', tracks: '9', session: '20:15-21:00' },
        { start: '20:45', tracks: '-', session: '21:00-21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[1],
      times: [
        { start: '06:30', tracks: '-', session: '06:45-07:30' },
        { start: '07:15', tracks: '-', session: '07:30-08:15' },
        { start: '08:00', tracks: '-', session: '08:15-09:00' },
        { start: '08:45', tracks: '10', session: '09:00-09:45' },
        { start: '09:30', tracks: '10', session: '09:45-10:30' },
        { start: '10:15', tracks: '10', session: '10:30-11:15' },
        { start: '11:00', tracks: '10', session: '11:15-12:00' },
        { start: '11:45', tracks: '10', session: '12:00-12:45' },
        { start: '12:30', tracks: '9', session: '12:45-13:30' },
        { start: '13:15', tracks: '10', session: '13:30-14:15' },
        { start: '14:00', tracks: '10', session: '14:15-15:00' },
        { start: '14:45', tracks: '10', session: '15:00-15:45' },
        { start: '15:30', tracks: '10', session: '15:45-16:30' },
        { start: '16:15', tracks: '10', session: '16:30-17:15' },
        { start: '17:00', tracks: '10', session: '17:15-18:00' },
        { start: '17:45', tracks: '10', session: '18:00-18:45' },
        { start: '18:30', tracks: '9', session: '18:45-19:30' },
        { start: '19:15', tracks: '8', session: '19:30-20:15' },
        { start: '20:00', tracks: '9', session: '20:15-21:00' },
        { start: '20:45', tracks: '-', session: '21:00-21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[2],
      times: [
        { start: '06:30', tracks: '10', session: '06:45-07:30' },
        { start: '07:15', tracks: '10', session: '07:30-08:15' },
        { start: '08:00', tracks: '10', session: '08:15-09:00' },
        { start: '08:45', tracks: '10', session: '09:00-09:45' },
        { start: '09:30', tracks: '10', session: '09:45-10:30' },
        { start: '10:15', tracks: '10', session: '10:30-11:15' },
        { start: '11:00', tracks: '10', session: '11:15-12:00' },
        { start: '11:45', tracks: '10', session: '12:00-12:45' },
        { start: '12:30', tracks: '9', session: '12:45-13:30' },
        { start: '13:15', tracks: '-', session: '13:30-14:15' },
        { start: '14:00', tracks: '-', session: '14:15-15:00' },
        { start: '14:45', tracks: '10', session: '15:00-15:45' },
        { start: '15:30', tracks: '10', session: '15:45-16:30' },
        { start: '16:15', tracks: '10', session: '16:30-17:15' },
        { start: '17:00', tracks: '8', session: '17:15-18:00' },
        { start: '17:45', tracks: '10', session: '18:00-18:45' },
        { start: '18:30', tracks: '9', session: '18:45-19:30' },
        { start: '19:15', tracks: '7', session: '19:30-20:15' },
        { start: '20:00', tracks: '8', session: '20:15-21:00' },
        { start: '20:45', tracks: '-', session: '21:00-21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[3],
      times: [
        { start: '06:30', tracks: '-', session: '06:45-07:30' },
        { start: '07:15', tracks: '-', session: '07:30-08:15' },
        { start: '08:00', tracks: '-', session: '08:15-09:00' },
        { start: '08:45', tracks: '10', session: '09:00-09:45' },
        { start: '09:30', tracks: '10', session: '09:45-10:30' },
        { start: '10:15', tracks: '10', session: '10:30-11:15' },
        { start: '11:00', tracks: '10', session: '11:15-12:00' },
        { start: '11:45', tracks: '10', session: '12:00-12:45' },
        { start: '12:30', tracks: '10', session: '12:45-13:30' },
        { start: '13:15', tracks: '10', session: '13:30-14:15' },
        { start: '14:00', tracks: '10', session: '14:15-15:00' },
        { start: '14:45', tracks: '10', session: '15:00-15:45' },
        { start: '15:30', tracks: '10', session: '15:45-16:30' },
        { start: '16:15', tracks: '10', session: '16:30-17:15' },
        { start: '17:00', tracks: '10', session: '17:15-18:00' },
        { start: '17:45', tracks: '8', session: '18:00-18:45' },
        { start: '18:30', tracks: '10', session: '18:45-19:30' },
        { start: '19:15', tracks: '9', session: '19:30-20:15' },
        { start: '20:00', tracks: '8', session: '20:15-21:00' },
        { start: '20:45', tracks: '-', session: '21:00-21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[4],
      times: [
        { start: '06:30', tracks: '10', session: '06:45-07:30' },
        { start: '07:15', tracks: '10', session: '07:30-08:15' },
        { start: '08:00', tracks: '10', session: '08:15-09:00' },
        { start: '08:45', tracks: '10', session: '09:00-09:45' },
        { start: '09:30', tracks: '10', session: '09:45-10:30' },
        { start: '10:15', tracks: '10', session: '10:30-11:15' },
        { start: '11:00', tracks: '10', session: '11:15-12:00' },
        { start: '11:45', tracks: '10', session: '12:00-12:45' },
        { start: '12:30', tracks: '9', session: '12:45-13:30' },
        { start: '13:15', tracks: '-', session: '13:30-14:15' },
        { start: '14:00', tracks: '-', session: '14:15-15:00' },
        { start: '14:45', tracks: '10', session: '15:00-15:45' },
        { start: '15:30', tracks: '10', session: '15:45-16:30' },
        { start: '16:15', tracks: '10', session: '16:30-17:15' },
        { start: '17:00', tracks: '8', session: '17:15-18:00' },
        { start: '17:45', tracks: '10', session: '18:00-18:45' },
        { start: '18:30', tracks: '10', session: '18:45-19:30' },
        { start: '19:15', tracks: '9', session: '19:30-20:15' },
        { start: '20:00', tracks: '8', session: '20:15-21:00' },
        { start: '20:45', tracks: '-', session: '21:00-21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[5],
      times: [
        { start: '06:30', tracks: '-', session: '06:45-07:30' },
        { start: '07:15', tracks: '-', session: '07:30-08:15' },
        { start: '08:00', tracks: '-', session: '08:15-09:00' },
        { start: '08:45', tracks: '10', session: '09:00-09:45' },
        { start: '09:30', tracks: '10', session: '09:45-10:30' },
        { start: '10:15', tracks: '9', session: '10:30-11:15' },
        { start: '11:00', tracks: '10', session: '11:15-12:00' },
        { start: '11:45', tracks: '10', session: '12:00-12:45' },
        { start: '12:30', tracks: '9', session: '12:45-13:30' },
        { start: '13:15', tracks: '10', session: '13:30-14:15' },
        { start: '14:00', tracks: '10', session: '14:15-15:00' },
        { start: '14:45', tracks: '10', session: '15:00-15:45' },
        { start: '15:30', tracks: '10', session: '15:45-16:30' },
        { start: '16:15', tracks: '10', session: '16:30-17:15' },
        { start: '17:00', tracks: '10', session: '17:15-18:00' },
        { start: '17:45', tracks: '10', session: '18:00-18:45' },
        { start: '18:30', tracks: '10', session: '18:45-19:30' },
        { start: '19:15', tracks: '9', session: '19:30-20:15' },
        { start: '20:00', tracks: '9', session: '20:15-21:00' },
        { start: '20:45', tracks: '-', session: '21:00-21:45' },
      ],
    },
    {
      dayOfWeek: getDaysOfWeek()[6],
      times: [
        { start: '06:30', tracks: '-', session: '06:45-07:30' },
        { start: '07:15', tracks: '-', session: '07:30-08:15' },
        { start: '08:00', tracks: '-', session: '08:15-09:00' },
        { start: '08:45', tracks: '10', session: '09:00-09:45' },
        { start: '09:30', tracks: '10', session: '09:45-10:30' },
        { start: '10:15', tracks: '10', session: '10:30-11:15' },
        { start: '11:00', tracks: '10', session: '11:15-12:00' },
        { start: '11:45', tracks: '10', session: '12:00-12:45' },
        { start: '12:30', tracks: '10', session: '12:45-13:30' },
        { start: '13:15', tracks: '10', session: '13:30-14:15' },
        { start: '14:00', tracks: '10', session: '14:15-15:00' },
        { start: '14:45', tracks: '10', session: '15:00-15:45' },
        { start: '15:30', tracks: '10', session: '15:45-16:30' },
        { start: '16:15', tracks: '10', session: '16:30-17:15' },
        { start: '17:00', tracks: '10', session: '17:15-18:00' },
        { start: '17:45', tracks: '9', session: '18:00-18:45' },
        { start: '18:30', tracks: '10', session: '18:45-19:30' },
        { start: '19:15', tracks: '10', session: '19:30-20:15' },
        { start: '20:00', tracks: '10', session: '20:15-21:00' },
        { start: '20:45', tracks: '-', session: '21:00-21:45' },
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
<link href="/bitrix/cache/css/s1/inner/kernel/kernel.css?1559937553" type="text/css" rel="stylesheet" />
<script type="text/javascript"> var arKernelCSS = new Array('/bitrix/js/main/core/css/core.css','/bitrix/js/main/core/css/core_popup.css','/bitrix/js/main/core/css/core_panel.css','/bitrix/js/fileman/sticker.css','/bitrix/js/socialservices/css/ss.css'); </script><link href="/bitrix/cache/css/s1/inner/template_af409cffe79dccd662306f47851ed6e2/template_af409cffe79dccd662306f47851ed6e2_6b463f99c82998693d0505e97454563d.css?1559440255" type="text/css" rel="stylesheet" />

<script type="text/javascript">if(!window.BX)window.BX={message:function(mess){if(typeof mess=='object') for(var i in mess) BX.message[i]=mess[i]; return true;}};</script><script type="text/javascript">(window.BX||top.BX).message({'LANGUAGE_ID':'ru','FORMAT_DATE':'DD.MM.YYYY','FORMAT_DATETIME':'DD.MM.YYYY HH:MI:SS','COOKIE_PREFIX':'BITRIX_SM','USER_ID':'','SERVER_TIME':'1563780732','SERVER_TZ_OFFSET':'10800','USER_TZ_OFFSET':'0','USER_TZ_AUTO':'Y','bitrix_sessid':'fe5afa389be24199b336a6fdec8302d8','SITE_ID':'s1'});(window.BX||top.BX).message({'JS_CORE_LOADING':'Загрузка...','JS_CORE_NO_DATA':'- Нет данных -','JS_CORE_WINDOW_CLOSE':'Закрыть','JS_CORE_WINDOW_EXPAND':'Развернуть','JS_CORE_WINDOW_NARROW':'Свернуть в окно','JS_CORE_WINDOW_SAVE':'Сохранить','JS_CORE_WINDOW_CANCEL':'Отменить','JS_CORE_H':'ч','JS_CORE_M':'м','JS_CORE_S':'с','JSADM_AI_HIDE_EXTRA':'Скрыть лишние','JSADM_AI_ALL_NOTIF':'Показать все','JSADM_AUTH_REQ':'Требуется авторизация!','JS_CORE_WINDOW_AUTH':'Войти','JS_CORE_IMAGE_FULL':'Полный размер'});</script>
<script type="text/javascript" src="/bitrix/cache/js/s1/inner/kernel/kernel.js?1559937553"></script>
<script type="text/javascript"> BX.setKernelJS(['/bitrix/js/main/core/core.js','/bitrix/js/main/core/core_ajax.js','/bitrix/js/main/session.js','/bitrix/js/main/core/core_popup.js','/bitrix/js/main/core/core_fx.js','/bitrix/js/main/core/core_window.js','/bitrix/js/main/utils.js','/bitrix/js/main/popup_menu.js','/bitrix/js/socialservices/ss.js']); </script><script type="text/javascript">
bxSession.Expand(1440, 'fe5afa389be24199b336a6fdec8302d8', false, '8a5830f3ad02b45d2c5f28919fab30e0');
</script>

<!--Openstat--><span id="openstat2373824"></span><script type="text/javascript">var openstat={counter:2373824,next:openstat};(function(d,t){var j=d.createElement(t);j.async=true;j.type="text/javascript";j.src="//openstat.net/cnt.js";var s=d.getElementsByTagName(t)[0];s.parentNode.insertBefore(j,s)})(document,"script")</script><!--/Openstat-->
<script type="text/javascript" src="/bitrix/cache/js/s1/inner/template_b669808a41a4826644678ba184a7f410/template_b669808a41a4826644678ba184a7f410_d4f9fd3227d4f08b41ed3acfa0fdcadb.js?1559440255"></script>

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
						<li class="nav-container__block__box"><a class="nav-container__block__link" href="http://brest-dvvs.by/services/dopolnitelnye_uslugi/baza_otdykha_berezovaya_roshcha/baza_otdykha_berezovaya_roshcha/">База отдыха</a></li>
						<li class="nav-container__block__box"><a class="nav-container__block__link" href="http://brest-dvvs.by/services/dopolnitelnye_uslugi/Hotel/gostinitsa/">Гостиница</a></li>
						<li class="nav-container__block__box activ"><a class="nav-container__block__link" href="/sched/index.php">Расписание</a></li>
						<li class="nav-container__block__box"><a class="nav-container__block__link" href="/contacts/">Контакты</a></li>
						<li class="nav-container__block__box"><a class="nav-container__block__link" href="/sched/price.php">Прейскурант</a></li>
					</ul>
		<div class="clear"></div>
	</div>
	<div class="nav-bottom-shadow"></div>
</div>
	
		
	<div id="content">
	<div class="content-title content-title-min-bottom"><h2></h2></div>	 
<div id="section-3" class="detailed-description__category__title"> Расписание сеансов <img class="info" src="/bitrix/templates/.default/image/icons/title-category-img-3.png"  /> </div>
 
<div id="section-3" class="detailed-description__category__title"> 
  <br />
 </div>

<style>
  .table-style__block{width:auto;}
</style>
 
<br />
  
<br />
 
<table width="100%" height="80" cellspacing="0" cellpadding="0" border="0" align="center"> 
  <tbody> 
    <tr align="center"><td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#F16522"><font size="6" color="#FFFFFF"> 
          <br />
         <b>Бассейн 50 м. (учебно-тренировочный)</b></font></td> </tr>
   </tbody>
 </table>
  
<div align="center"> </div>
   
<br />
 
<div align="center"> 
  <table width="100%" cellspacing="0" cellpadding="0" border="1" align="center"> 
    <tbody> 
      <tr> <td colspan="9" bgcolor="#0072BC"> 
          <p align="center"><b><font size="5" color="#FFFFFF">Наличие дорожек для свободного плавания с 22.07.2019 по 28.07.2019 
                <br />
               </font></b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>Пуск</b></p>
         </td> <td align="center"> 
          <p><b>Сеанс</b></p>
         </td> <td align="center"> 
          <p><b>Пн.</b></p>
         </td> <td align="center"> 
          <p><b>Вт.</b></p>
         </td> <td align="center"> 
          <p><b>Ср.</b></p>
         </td> <td align="center"> 
          <p><b>Чт.</b></p>
         </td> <td align="center"> 
          <p><b>Пт.</b></p>
         </td> <td align="center"> 
          <p><b>Сб.</b></p>
         </td> <td align="center"> 
          <p><b>Вс.</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>06:30</b></p>
         </td> <td align="center"> 
          <p><b>06:45-07:30</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"> 
          <p><b>-</b></p>
         </td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>-</b> 
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>-</b> 
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>-</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>07:15</b></p>
         </td> <td align="center"> 
          <p><b>07:30-08:15</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>-</b></td> <td align="center"> 
          <p><b>10</b></p>
         </td> <td align="center"> 
          <p><b>-</b> 
            <br />
           </p>
         </td> <td align="center"><b>10</b></td> <td align="center"> 
          <p><b>-</b> 
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>-</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>08:00</b></p>
         </td> <td align="center"> 
          <p><b>08:15-09:00</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>-</b></td> <td align="center"><b>10</b></td> <td align="center"><b>-</b> </td> <td align="center"><b>10</b></td><td align="center"><b>-</b></td><td align="center"> 
          <p><b>-</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>08:45</b></p>
         </td> <td align="center"> 
          <p><b>09:00-09:45</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b></td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"><b>10</b></td> <td align="center"> 
          <p><b>10</b></p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>09:30</b></p>
         </td> <td align="center"> 
          <p><b>09:45-10:30</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b></td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b></td> <td align="center"> 
          <p><b>10</b></p>
         </td> <td align="center"><b>10</b></td> </tr>
     
      <tr> <td align="center"> 
          <p><b>10:15</b></p>
         </td> <td align="center"> 
          <p><b>10:30-11:15</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"> 
          <p><b>10</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"> 
          <p><b>9</b></p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>11:00</b></p>
         </td> <td align="center"> 
          <p><b>11:15-12:00</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b></td> <td align="center"><b>10</b></td> <td align="center"> 
          <p><b>10</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>11:45</b></p>
         </td> <td align="center"> 
          <p><b>12:00-12:45</b></p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td><td align="center"><b>10</b></td> <td align="center"><b>10</b></td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"> <b>10</b></td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td></tr>
     
      <tr><td align="center"> 
          <p><b>12:30</b></p>
         </td> <td align="center"> 
          <p><b>12:45-13:30</b></p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> <td align="center"> 
          <p><b>9</b></p>
         </td> <td align="center"> 
          <p><b>9</b> 
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"><b>9</b></td> <td align="center"> 
          <p><b>9</b>
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>13:15</b></p>
         </td> <td align="center"> 
          <p><b>13:30-14:15</b></p>
         </td> <td align="center"><b>-</b></td> <td align="center"> 
          <p><b>10</b></p>
         </td> <td align="center"><b>-</b></td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"><b>-</b> </td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>14:00</b></p>
         </td> <td align="center"> 
          <p><b>14:15-15:00</b></p>
         </td> <td align="center"><b>-</b></td> <td align="center"><b>10</b></td> <td align="center"><b>-</b></td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"><b>-</b> </td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>14:45</b></p>
         </td> <td align="center"> 
          <p><b>15:00-15:45</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b></td> <td align="center"><b>10</b></td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"> 
          <p><b>10 
              <br />
             </b> </p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>15:30</b></p>
         </td> <td align="center"> 
          <p><b>15:45-16:30</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b></td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>16:15</b></p>
         </td> <td align="center"> 
          <p><b>16:30-17:15</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b></td><td align="center"><b>10</b> 
          <br />
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b></td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>10</b></p>
         </td> </tr>
     
      <tr> <td align="center"> 
          <p><b>17:00</b></p>
         </td> <td align="center"> 
          <p><b>17:15-18:00</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b></td> <td align="center"><b>8</b> </td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"> 
          <p><b>8</b></p>
         </td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"><b>10</b></td> </tr>
     
      <tr> <td align="center"> 
          <p><b>17:45</b></p>
         </td> <td align="center"> 
          <p><b>18:00-18:45</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"> 
          <p><b>8</b> 
            <br />
           </p>
         </td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"><b>9</b></td> </tr>
     
      <tr> <td align="center"> 
          <p><b>18:30</b></p>
         </td> <td align="center"> 
          <p><b>18:45-19:30</b></p>
         </td> <td align="center"><b>10</b></td> <td align="center"><b>9</b> 
          <br />
         </td> <td align="center"><b>9</b> 
          <br />
         </td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"><b>10</b> 
          <br />
         </td> <td align="center"> 
          <p><b>10</b> 
            <br />
           </p>
         </td> <td align="center"><b>10</b></td> </tr>
     
      <tr> <td align="center"> 
          <p><b>19:15</b></p>
         </td> <td align="center"> 
          <p><b>19:30-20:15</b></p>
         </td> <td align="center"><b>9</b></td> <td align="center"><b>8</b></td> <td align="center"><b>7</b></td> <td align="center"> 
          <p><b>9</b> 
            <br />
           </p>
         </td> <td align="center"><b>9</b></td> <td align="center"> 
          <p><b>9</b></p>
         </td> <td align="center"><b>10</b></td> </tr>
     
      <tr> <td align="center"> 
          <p><b>20:00</b></p>
         </td> <td align="center"> 
          <p><b>20:15-21:00</b></p>
         </td> <td align="center"><b>9</b></td> <td align="center"><b>9</b></td> <td align="center"><b>8</b></td> <td align="center"> 
          <p><b>8</b> 
            <br />
           </p>
         </td> <td align="center"><b>8</b>
          <br />
         </td> <td align="center"> 
          <p><b>9</b></p>
         </td> <td align="center"><b>10</b></td> </tr>
     
      <tr> <td align="center"> 
          <p><b>20:45</b></p>
         </td> <td align="center"> 
          <p><b>21:00-21:45</b></p>
         </td> <td align="center"><b>- </b></td> <td align="center"><b>-</b> </td> <td align="center"> 
          <p><b>-</b></p>
         </td> <td align="center"> 
          <p><b>-</b> 
            <br />
           </p>
         </td> <td align="center"><b>-</b> 
          <br />
         </td> <td align="center"> 
          <p><b>-</b></p>
         </td> <td align="center"> 
          <p><b>-</b></p>
         </td> </tr>
     </tbody>
   </table>
 </div>
  
<br />
 
<br />
  
<br />
 
<table width="100%" height="80" cellspacing="0" cellpadding="0" border="0" align="center"> 
  <tbody> 
    <tr align="center"><td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#F16522"><font size="6" color="#FFFFFF"><b> 
            <br />
           Бассейн 25 м. (физкультурно-оздоровительный)</b></font></td></tr>
   </tbody>
 </table>
  
<div> 
  <div align="center"> </div>
 </div>
 
<br />
 
<div> 
  <div align="center"> 
    <table width="100%" cellspacing="0" cellpadding="0" border="1" align="center"> 
      <tbody> 
        <tr> <td colspan="9" bgcolor="#0072BC"> 
            <p align="center"><b><font size="5" color="#FFFFFF">Наличие дорожек для свободного плавания с 22.07</font></b><b><font size="5" color="#FFFFFF">.2019 по 28.07.2019 </font></b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>Пуск</b></p>
           </td> <td> 
            <p align="center"><b>Сеанс</b></p>
           </td> <td> 
            <p align="center"><b>Пн.</b></p>
           </td> <td> 
            <p align="center"><b>Вт.</b></p>
           </td> <td> 
            <p align="center"><b>Ср.</b></p>
           </td> <td> 
            <p align="center"><b>Чт.</b></p>
           </td> <td> 
            <p align="center"><b>Пт.</b></p>
           </td> <td> 
            <p align="center"><b>Сб.</b></p>
           </td> <td> 
            <p align="center"><b>Вс.</b></p>
           </td> </tr>
       
        <tr><td colspan="1" style="text-align: center;"><b>06:30</b></td><td colspan="1" style="text-align: center;"><b>06:45_07:30</b></td><td colspan="1" style="text-align: center;"><b>-</b></td><td colspan="1" style="text-align: center;"><b>-</b></td><td colspan="1" style="text-align: center;"><b>-</b></td><td colspan="1" style="text-align: center;"><b>-</b></td><td colspan="1" style="text-align: center;"><b>-</b></td><td colspan="1" style="text-align: center;"><b>-</b></td><td colspan="1" style="text-align: center;"><b>-</b></td></tr>
       
        <tr> <td> 
            <p align="center"><b>07:15</b></p>
           </td> <td> 
            <p align="center"><b>07:30_08:15</b></p>
           </td> <td align="center"><b>-</b></td> <td> 
            <p align="center">- </p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>08:00</b></p>
           </td> <td> 
            <p align="center"><b>08:15_09:00</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>-</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>-</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>08:45</b></p>
           </td> <td> 
            <p align="center"><b>09:00_09:45</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>09:30</b></p>
           </td> <td> 
            <p align="center"><b>09:45_10:30</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>10:15</b></p>
           </td> <td> 
            <p align="center"><b>10:30_11:15</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td align="center"><b>4</b> 
            <br />
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>11:00</b></p>
           </td> <td> 
            <p align="center"><b>11:15_12:00</b></p>
           </td> <td> 
            <p align="center"><b>-</b> </p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>-</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>11:45</b></p>
           </td> <td> 
            <p align="center"><b>12:00_12:45</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b> </p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>3</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>12:30</b></p>
           </td> <td> 
            <p align="center"><b>12:45_13:30</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>13:15</b></p>
           </td> <td> 
            <p align="center"><b>13:30_14:15</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>14:00</b></p>
           </td> <td> 
            <p align="center"><b>14:15_15:00</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td><td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>14:45</b></p>
           </td> <td> 
            <p align="center"><b>15:00_15:45</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>15:30</b></p>
           </td> <td> 
            <p align="center"><b>15:45_16:30</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>16:15</b></p>
           </td> <td> 
            <p align="center"><b>16:30_17:15</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>17:00</b></p>
           </td> <td> 
            <p align="center"><b>17:15_18:00</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>-</b> </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>17:45</b></p>
           </td> <td> 
            <p align="center"><b>18:00_18:45</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>2</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>2</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>18:30</b></p>
           </td> <td> 
            <p align="center"><b>18:45_19:30</b></p>
           </td> <td> 
            <p align="center"><b>2</b></p>
           </td> <td> 
            <p align="center"><b>2</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>2 </b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>2</b></p>
           </td> <td> 
            <p align="center"><b>4</b> </p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>19:15</b></p>
           </td> <td> 
            <p align="center"><b>19:30_20:15</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>20:00</b></p>
           </td> <td> 
            <p align="center"><b>20:15_21:00</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> <td> 
            <p align="center"><b>4</b> 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>4</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>20:45</b></p>
           </td> <td> 
            <p align="center"><b>21:00_21:45</b></p>
           </td> <td> 
            <p align="center">- 
              <br />
             </p>
           </td> <td> 
            <p align="center">- 
              <br />
             </p>
           </td> <td> 
            <p align="center">- 
              <br />
             </p>
           </td> <td> 
            <p align="center"> - 
              <br />
             </p>
           </td> <td> 
            <p align="center"> - 
              <br />
             </p>
           </td> <td> 
            <p align="center">- 
              <br />
             </p>
           </td> <td> 
            <p align="center"><b>-</b> 
              <br />
             </p>
           </td> </tr>
       </tbody>
     </table>
   </div>
 </div>
  
<br />
 
<br />
  
<br />
 
<table width="100%" height="80" cellspacing="0" cellpadding="0" border="0" align="center"> 
  <tbody> 
    <tr align="center"><td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#F16522"><font size="6" color="#FFFFFF"><b> 
            <br />
           Бассейн &quot;Малютка&quot; (детский)</b></font></td></tr>
   </tbody>
 </table>
  
<div> 
  <div align="center"> </div>
 </div>
 
<br />
 
<div> 
  <div align="center"> 
    <table width="100%" cellspacing="0" cellpadding="0" border="1" align="center"> 
      <tbody> 
        <tr> <td colspan="9" bgcolor="#0072BC"> 
            <p align="center"><b><font size="5" color="#FFFFFF">Наличие сеансов для семейного плавания с 22.07.2019 по 28.07.2019</font></b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>Пуск</b></p>
           </td> <td> 
            <p align="center"><b>Сеанс</b></p>
           </td> <td> 
            <p align="center"><b>Пн.</b></p>
           </td> <td> 
            <p align="center"><b>Вт.</b></p>
           </td> <td> 
            <p align="center"><b>Ср.</b></p>
           </td> <td> 
            <p align="center"><b>Чт.</b></p>
           </td> <td> 
            <p align="center"><b>Пт.</b></p>
           </td> <td> 
            <p align="center"><b>Сб.</b></p>
           </td> <td> 
            <p align="center"><b>Вс.</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>08:45</b></p>
           </td> <td> 
            <p align="center"><b>09:00_09:45</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b> </p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>09:30</b></p>
           </td> <td> 
            <p align="center"><b>09:45_10:30</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>10:15</b></p>
           </td> <td> 
            <p align="center"><b>10:30_11:15</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>11:00</b></p>
           </td> <td> 
            <p align="center"><b>11:15_12:00</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td align="center"><b>Семейное плаван</b><b>ие</b></td> <td align="center"><b>Семейное плаван</b><b>ие</b></td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>11:45</b></p>
           </td> <td> 
            <p align="center"><b>12:00_12:45</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td><td align="center"><b>Семейное плаван</b><b>ие</b></td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>12:30</b></p>
           </td> <td> 
            <p align="center"><b>12:45_13:30</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td><td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>13:15</b></p>
           </td> <td> 
            <p align="center"><b>13:30_14:15</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>14:00</b></p>
           </td> <td> 
            <p align="center"><b>14:15_15:00</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>14:45</b></p>
           </td> <td> 
            <p align="center"><b>15:00_15:45</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td><td align="center"><b>Семейное плавание</b></td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>15:30</b></p>
           </td> <td> 
            <p align="center"><b>15:45_16:30</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>16:15</b></p>
           </td> <td> 
            <p align="center"><b>16:30_17:15</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>17:00</b></p>
           </td> <td> 
            <p align="center"><b>17:15_18:00</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td><td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>17:45</b></p>
           </td> <td> 
            <p align="center"><b>18:00_18:45</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>18:30</b></p>
           </td> <td> 
            <p align="center"><b>18:45_19:30</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>-</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>19:15</b></p>
           </td> <td> 
            <p align="center"><b>19:30_20:15</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       
        <tr> <td> 
            <p align="center"><b>20:00</b></p>
           </td> <td> 
            <p align="center"><b>20:15_21:00</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плаван</b><b>ие</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> <td> 
            <p align="center"><b>Семейное плавание</b></p>
           </td> </tr>
       </tbody>
     </table>
   </div>
 </div>
  
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
  
<div> </div>
 <b><font size="6" color="#EE1D24">Обращаем Ваше внимание на изменения в расписании занятий</font></b> 
<br />
 
<div> 
  <table width="100%" cellspacing="0" cellpadding="0" border="1" align="center"> 
    <tbody> 
      <tr> <td colspan="6" style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#0072BC"> 
          <p align="center"><b><font size="5" color="#FFFFFF">с 08.07.2019 по 28.07.2019 года</font></b></p>
         </td> </tr>
     
      <tr> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Понедельник</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Вторник</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Среда</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Четверг</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Пятница</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Суббота</b></p>
         </td> </tr>
     
      <tr><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1" bgcolor="#FFFFFF" align="center"> 
          <br />
         </td></tr>
     
      <tr> <td style="border-image: none 100% / 1 / 0 stretch;" valign="middle" bgcolor="#6CCFF7" align="center"> 
          <p align="center"> <b>18.30-20.00 
              <br />
             Степусь Ольга 
              <br />
             Силовой тренинг</b> 
            <br />
           </p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#FFFFFF" align="center"> 
          <p> </p>
         
          <br />
         <b> </b><b> </b> </td> <td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#6CCFF7"> 
          <p style="text-align: center;" align="center"> <b>18.30-20.00</b></p>
        
          <p style="text-align: center;" align="center"><b>Степусь Ольга</b></p>
        
          <p style="text-align: center;" align="center"><b>Силовой тренинг</b>
            <br />
           </p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#FFFFFF"> 
          <p align="center"> 
            <br />
           </p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#6CCFF7"> 
          <p align="center"> <b>18.30-20.00 
              <br />
             Степусь Ольга</b><b> 
              <br />
             Силовой тренинг</b> 
            <br />
           </p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"> </p>
         
          <br />
         </td> </tr>
     
      <tr><td colspan="1" bgcolor="#FFFFFF" align="center">  
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center">  
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center">  
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center">  
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center"> 
          <br />
         </td><td colspan="1"></td></tr>
     </tbody>
   </table>
 </div>
  
<br />
 
<br />
  
<br />
 
<table width="100%" height="80" cellspacing="0" cellpadding="0" border="0" align="center"> 
  <tbody> 
    <tr align="center"><td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#F16522"><font size="6" color="#FFFFFF"><b> 
            <br />
           Аквафитнес</b></font></td></tr>
   </tbody>
 </table>
  
<div> </div>
 
<div> <i><b>Обращаем Ваше внимание, что осуществляется запись на услугу &quot;Аквафитнес&quot;</b></i></div>
 
<div><i><b>Телефон для записи: глубина (бассейн 50 м) 32-20-50, мелко (бассейн 25 м) 32-20-25</b></i> 
  <br />
 </div>
 
<div> </div>
 
<br />
 
<div> 
  <table width="100%" cellspacing="0" cellpadding="0" border="1" align="center"> 
    <tbody> 
      <tr> <td colspan="7" style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#0072BC"> 
          <p align="center"><b><font size="5" color="#FFFFFF">с 08.07.2019 </font><font size="5" color="#FFFFFF">по 28.07.</font><font size="5" color="#FFFFFF">2019 
                <br />
               </font></b></p>
         </td> </tr>
     
      <tr> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Время</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Понедельник</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Вторник</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Среда</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Четверг</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Пятница</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>Суббота</b></p>
         </td> </tr>
     
      <tr> <td colspan="7" style="border-image: none 100% / 1 / 0 stretch;" bgcolor=""> 
          <p align="center"> </p>
         
          <p align="center"><b><font color="#F16522">БАССЕЙН 25м (мелкий)</font></b></p>
         </td> </tr>
     
      <tr><td colspan="1" align="center"><b>11:45-12:45</b></td><td colspan="1" align="center"> 
          <br />
         </td><td colspan="1" align="center"> 
          <br />
         </td><td colspan="1" align="center"> 
          <br />
         </td><td colspan="1" align="center"> 
          <br />
         </td><td colspan="1" align="center"> 
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center"> 
          <br />
         </td></tr>
     
      <tr> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>17:45-18:45</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#FFFFFF" align="center"> <b> 
            <br />
           </b> </td> <td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#FFFFFF" align="center">  
          <br />
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" valign="middle" bgcolor="#FFFFFF" align="center"> 
          <br />
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" valign="middle" bgcolor="" align="center"> 
          <br />
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#FFFFFF" align="center"> <b> 
            <br />
           </b> </td> <td style="border-image: none 100% / 1 / 0 stretch;" align="center"> <b> 
            <br />
           </b> </td> </tr>
     
      <tr><td colspan="1" align="center"><b>18:30-19:30</b></td><td colspan="1" bgcolor="#00FF00" align="center"><b>Егорова Ирина  </b> 
          <br />
         </td><td colspan="1" bgcolor="#FFFF00" align="center"> <b>Конончик Марина</b> 
          <br />
         </td><td colspan="1" bgcolor="#00FF00" align="center"><b>Егорова Ирина  </b> 
          <br />
         </td><td colspan="1" bgcolor="#FFFF00" align="center"> <b>Конончик Марина</b> 
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center">  
          <br />
         </td><td colspan="1" align="center"> 
          <br />
         </td></tr>
     
      <tr><td colspan="1" align="center"><b>19:15-20:15</b></td><td colspan="1" align="center"> 
          <br />
         </td><td colspan="1" bgcolor="" align="center"> 
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center"> 
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center">  
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center">  
          <br />
         </td><td colspan="1" align="center"> 
          <br />
         </td></tr>
     
      <tr> <td colspan="7" style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"> </p>
         
          <p align="center"><b><font color="#F16522">БАССЕЙН 50м (глубокий)</font></b></p>
         </td> </tr>
     
      <tr> <td style="border-image: none 100% / 1 / 0 stretch;"> 
          <p align="center"><b>18:30-19:30</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" valign="middle" bgcolor="#FFFFFF" align="center"> <b> 
            <br />
           </b> </td> <td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#FFFFFF" align="center">  
          <br />
         </td><td style="border-image: none 100% / 1 / 0 stretch;" valign="middle" bgcolor="#FFFFFF" align="center"> 
          <br />
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" valign="middle" bgcolor="" align="center"> 
          <br />
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" align="center"> <b> 
            <br />
           </b> </td> <td style="border-image: none 100% / 1 / 0 stretch;" align="center"> <b> 
            <br />
           </b> </td> </tr>
     
      <tr><td valign="top" align="center"><b>19:15-20:15 
            <br />
           </b></td><td valign="top" bgcolor="#00FF00" align="center"> <b> Егорова Ирина</b> 
          <br />
         </td><td valign="top" bgcolor="#FFFF00" align="center"> <b>Конончик Марина</b> 
          <br />
         </td><td valign="top" bgcolor="#00FF00" align="center"><b> Егорова Ирина
            <br />
           </b></td><td valign="top" bgcolor="#FFFF00" align="center"><b>  Конончик Марина</b> 
          <br />
         </td><td valign="top" bgcolor="#FFFFFF" align="center"><b>  
            <br />
           </b></td><td valign="top" align="center"><b> 
            <br />
           </b></td></tr>
     
      <tr><td colspan="1" align="center"><b>20:00-21:00</b></td><td colspan="1"></td><td colspan="1"></td><td colspan="1"></td><td colspan="1" bgcolor="#FFFFFF" align="center"> 
          <br />
         </td><td colspan="1"></td><td colspan="1"></td></tr>
     </tbody>
   </table>
 </div>
  
<br />
 
<br />
  
<br />
 
<table width="100%" height="80" cellspacing="0" cellpadding="0" border="0" align="center"> 
  <tbody> 
    <tr align="center"><td style="border-image: none 100% / 1 / 0 stretch;" bgcolor="#F16522"><font size="6" color="#FFFFFF"><b> 
            <br />
           Фитнес</b></font></td></tr>
   </tbody>
 </table>
  
<div> </div>
 
<br />
 
<div> 
  <table width="100%" cellspacing="0" cellpadding="0" border="1" bgcolor="#FFFFFF" align="center"> 
    <tbody> 
      <tr align="center"><td colspan="6" valign="top" bgcolor="#0072BC">
          <br />
        </td></tr>
     
      <tr><td valign="middle" align="center"><b>Время </b></td><td style="border-image: none 100% / 1 / 0 stretch;" align="center"> 
          <p><b>Понедельник</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" align="center"> 
          <p><b>Вторник</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" align="center"> 
          <p><b>Среда</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" align="center"> 
          <p><b>Четверг</b></p>
         </td> <td style="border-image: none 100% / 1 / 0 stretch;" align="center"> 
          <p><b>Пятница</b></p>
         </td> </tr>
     
      <tr><td valign="middle" align="center"><b>18:00-19:00</b></td><td colspan="1" bgcolor="#FFFFFF" align="center">  
          <br />
         </td><td colspan="1" align="center"> 
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center">  
          <br />
        </td><td colspan="1" align="center"> 
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center"> <b> 
            <br />
           </b> </td></tr>
     
      <tr><td valign="middle" align="center"><b>19:00-20:00 </b></td><td colspan="1" bgcolor="#FFFFFF" align="center"><b>  
            <br />
           </b> </td><td colspan="1" bgcolor="#FFFFFF" align="center">  <span style="background-color: rgb(255, 247, 153);"> </span> 
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center"> 
          <br />
         </td><td colspan="1" bgcolor="#FFFFFF" align="center"><b> 
            <br />
           </b></td><td colspan="1" bgcolor="#FFFFFF" align="center">  
          <br />
         </td></tr>
     
      <tr><td valign="middle" align="center"><b>20:00-21:00</b></td><td valign="top" bgcolor="#FFFFFF" align="center"><b> 
            <br />
           </b> </td><td valign="top" bgcolor="#FFFFFF" align="center"><b> 
            <br />
           </b></td><td valign="top" bgcolor="#FFFFFF" align="center">  
          <br />
         </td><td valign="top" bgcolor="#FFFFFF" align="center"><b> 
            <br />
           </b></td><td valign="top" bgcolor="#FFFFFF" align="center">  
          <br />
         </td></tr>
     </tbody>
   </table>
 </div>
  
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
 
<div>E-mail: <i>cor_brest@mail.ru</i></div>
			</div>
		</div><div  class="footer-container__block"><div class="footer-container__block__title footer-block-icon-info">О центре</div><a class="footer-container__block__link" href="/about/window/">Одно окно</a><a class="footer-container__block__link" href="/about/events/">События</a><a class="footer-container__block__link" href="/about/promotions/">Акции</a><a class="footer-container__block__link" href="/about/fyi/">Правила посещения</a><a class="footer-container__block__link" href="/about/vacancies/">Вакансии</a><a class="footer-container__block__link" href="/about/faq/">Часто задаваемые вопросы</a></div><div  class="footer-container__block"><div class="footer-container__block__title footer-block-icon-flag">Деятельность</div><a class="footer-container__block__link" href="/services/uslugi_fizicheskoy_kultury/">Услуги физической культуры</a><a class="footer-container__block__link" href="/services/vodnye_vidy_sporta/">Спорт</a><a class="footer-container__block__link" href="/services/dopolnitelnye_uslugi/">Услуги "Центра"</a><a class="footer-container__block__link" href="/rec/">Запись на услугу</a></div><div  class="footer-container__block remove__padding"><div class="footer-container__block__title footer-block-icon-keys">Клиентам</div><a class="footer-container__block__link" href="/for_legal_entities/">Информация</a><a class="footer-container__block__link" href="/for_legal_entities/applications/">Заявки</a><a class="footer-container__block__link" href="/for_legal_entities/treaty/">Договор</a><a class="footer-container__block__link" href="http://mfa.gov.by">Спорт в Беларуси</a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a><a class="footer-container__block__link" href=""></a></div>





	
<div class="progg_by" style="  margin-top: 85px;"><a href="https://atevi.by/" target="_blank">Разработка сайта: Atevi.by</a></div>
</div></div><!-- #footer --><!--YA_start-->
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter41194679 = new Ya.Metrika({id:41194679,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/41194679" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<!--YA_end-->
</body>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter23108341 = new Ya.Metrika({id:23108341,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/23108341" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</html>`;
