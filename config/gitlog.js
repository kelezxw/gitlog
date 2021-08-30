/*
 * @Author: kele
 * @Date: 2021-08-27 18:14:51
 * @LastEditors: kele
 * @LastEditTime: 2021-08-28 20:58:09
 * @Description: 记录
 */
const logArr = [
    // 报警  2019-10-----2019-12-10  8条
    {'id':0,'date':'2019-10-09','time':'11:25:36','remark':'报警首页编写','sourceFile':'\\src\\views\\autoFire\\autoFireIndex.vue','targetFile':'\\src\\views\\autoFire\\'},
    {'id':1,'date':'2019-10-17','time':'16:28:16','remark':'报警首页逻辑修改','sourceFile':'\\src\\views\\autoFire\\autoFireHome.vue','targetFile':'\\src\\views\\autoFire\\'},
    {'id':2,'date':'2019-10-29','time':'18:22:05','remark':'报警详情','sourceFile':'\\src\\views\\autoFire\\child\\autoFireDetailIndex.vue','targetFile':'\\src\\views\\autoFire\\child\\'},
    {'id':3,'date':'2019-11-08','time':'19:28:16','remark':'设备详情','sourceFile':'\\src\\views\\autoFire\\child\\deviceDetail.vue','targetFile':'\\src\\views\\autoFire\\child\\'},
    {'id':4,'date':'2019-11-14','time':'19:45:18','remark':'点位详情','sourceFile':'\\src\\views\\autoFire\\child\\pointDetail.vue','targetFile':'\\src\\views\\autoFire\\child\\'},
    {'id':5,'date':'2019-11-19','time':'18:55:19','remark':'点位列表','sourceFile':'\\src\\views\\autoFire\\child\\pointList.vue','targetFile':'\\src\\views\\autoFire\\child\\'},
    {'id':6,'date':'2019-11-27','time':'20:03:17','remark':'多建筑物选择逻辑','sourceFile':'\\src\\views\\autoFire\\components\\autoFireMultipleBuilding.vue','targetFile':'\\src\\views\\autoFire\\components\\'},
    {'id':7,'date':'2019-12-05','time':'21:27:16','remark':'单建筑物显示不同','sourceFile':'\\src\\views\\autoFire\\components\\autoFireSingleBuilding.vue','targetFile':'\\src\\views\\autoFire\\components\\'},
    
    // 智能维保  2019-12-----2020-01-10  5条
    {'id':8,'date':'2019-12-10','time':'10:27:36','remark':'维保首页','sourceFile':'\\src\\views\\maintenanceManagement\\maintenanceManagementIndex.vue','targetFile':'\\src\\views\\maintenanceManagement\\'},
    {'id':9,'date':'2019-12-16','time':'16:28:16','remark':'计划修改','sourceFile':'\\src\\views\\maintenanceManagement\\child\\changePlan.vue','targetFile':'\\src\\views\\maintenanceManagement\\child\\'},
    {'id':10,'date':'2019-12-23','time':'18:22:05','remark':'计划修改2','sourceFile':'\\src\\views\\maintenanceManagement\\child\\maintenancePlanIndex.vue','targetFile':'\\src\\views\\maintenanceManagement\\child\\'},
    {'id':11,'date':'2020-01-03','time':'19:28:16','remark':'操作维保计划','sourceFile':'\\src\\views\\maintenanceManagement\\child\\makingPlans.vue','targetFile':'\\src\\views\\maintenanceManagement\\child\\'},
    {'id':12,'date':'2020-01-04','time':'19:45:18','remark':'维保记录','sourceFile':'\\src\\views\\maintenanceManagement\\child\\recording.vue','targetFile':'\\src\\views\\maintenanceManagement\\child\\'},
    // 巡检  2020-01-----2020-01-15  5条
    {'id':13,'date':'2020-01-05','time':'18:55:19','remark':'巡检初始化','sourceFile':'\\src\\views\\dustMonitorSystem\\dustMonitorSystemHome.vue','targetFile':'\\src\\views\\dustMonitorSystem\\'},
    {'id':14,'date':'2020-01-06','time':'20:03:17','remark':'单建筑物巡检','sourceFile':'\\src\\views\\dustMonitorSystem\\dustMonitorSingleBuilding.vue','targetFile':'\\src\\views\\dustMonitorSystem\\'},
    {'id':15,'date':'2020-01-08','time':'21:27:16','remark':'巡检详情','sourceFile':'\\src\\views\\dustMonitorSystem\\dustMonitorDetailIndex.vue','targetFile':'\\src\\views\\dustMonitorSystem\\'},
    {'id':16,'date':'2020-01-11','time':'22:28:19','remark':'dustMonitorBuildingDetail','sourceFile':'\\src\\views\\dustMonitorSystem\\dustMonitorBuildingDetail.vue','targetFile':'\\src\\views\\dustMonitorSystem\\'},
    {'id':17,'date':'2020-01-14','time':'20:14:16','remark':'dustMonitor优化','sourceFile':'\\src\\views\\dustMonitorSystem\\dustMonitorSingleIndex.vue','targetFile':'\\src\\views\\dustMonitorSystem\\'},
    // 可燃气体  2020-01-----2020-02-25  4条
    {'id':18,'date':'2020-01-16','time':'18:55:19','remark':'combustibleSystemIndex','sourceFile':'\\src\\views\\combustibleGasSystem\\combustibleSystemIndex.vue','targetFile':'\\src\\views\\combustibleGasSystem\\'},
    {'id':19,'date':'2020-01-18','time':'20:03:17','remark':'combustibleSystemHome','sourceFile':'\\src\\views\\combustibleGasSystem\\combustibleSystemHome.vue','targetFile':'\\src\\views\\combustibleGasSystem\\'},
    {'id':20,'date':'2020-01-20','time':'21:27:16','remark':'combustibleSystemDetailIndex','sourceFile':'\\src\\views\\combustibleGasSystem\\child\\combustibleSystemDetailIndex.vue','targetFile':'\\src\\views\\combustibleGasSystem\\child\\'},
    {'id':21,'date':'2020-01-21','time':'20:14:16','remark':'combustibleSystemDetail','sourceFile':'\\src\\views\\combustibleGasSystem\\child\\combustibleSystemDetail.vue','targetFile':'\\src\\views\\combustibleGasSystem\\child\\'},
    // 故障  2020-01-----2020-02-25  6条
    {'id':22,'date':'2020-01-22','time':'18:55:19','remark':'故障首页','sourceFile':'\\src\\views\\fault\\faultHome.vue','targetFile':'\\src\\views\\fault\\'},
    {'id':23,'date':'2020-02-03','time':'20:03:17','remark':'maintainDetail','sourceFile':'\\src\\views\\fault\\maintainDetail.vue','targetFile':'\\src\\views\\fault\\'},
    {'id':24,'date':'2020-02-04','time':'21:27:16','remark':'maintainList','sourceFile':'\\src\\views\\fault\\maintainList.vue','targetFile':'\\src\\views\\fault\\child\\'},
    {'id':25,'date':'2020-02-07','time':'20:14:16','remark':'详情','sourceFile':'\\src\\views\\fault\\child\\faultDetail.vue','targetFile':'\\src\\views\\fault\\child\\'},
    {'id':26,'date':'2020-02-08','time':'20:14:16','remark':'faultDetailIndex','sourceFile':'\\src\\views\\fault\\child\\faultDetailIndex.vue','targetFile':'\\src\\views\\fault\\child\\'},
    {'id':27,'date':'2020-02-09','time':'20:14:16','remark':'故障列表','sourceFile':'\\src\\views\\fault\\child\\faultList.vue','targetFile':'\\src\\views\\fault\\child\\'},
    // 应急预案  2020-01-----2020-02-25  4条
    {'id':28,'date':'2020-02-10','time':'18:55:19','remark':'drillHistoryDetail','sourceFile':'\\src\\views\\emergemcySystem\\child\\drillHistoryDetail.vue','targetFile':'\\src\\views\\emergemcySystem\\child\\'},
    {'id':29,'date':'2020-02-12','time':'20:03:17','remark':'drillHistoryIndex','sourceFile':'\\src\\views\\emergemcySystem\\child\\drillHistoryIndex.vue','targetFile':'\\src\\views\\emergemcySystem\\child\\'},
    {'id':30,'date':'2020-02-14','time':'21:27:16','remark':'emergencyPlanSet','sourceFile':'\\src\\views\\emergemcySystem\\child\\emergencyPlanSet.vue','targetFile':'\\src\\views\\emergemcySystem\\child\\'},
    {'id':31,'date':'2020-02-16','time':'20:14:16','remark':'drillHistoryList','sourceFile':'\\src\\views\\emergemcySystem\\child\\drillHistoryList.vue','targetFile':'\\src\\views\\emergemcySystem\\child\\'},
    // 自动喷水灭火系统  2020-01-----2020-02-25  4条
    {'id':32,'date':'2020-02-18','time':'18:55:19','remark':'alarmHost','sourceFile':'\\src\\views\\sprinklerSystem\\components\\listItem\\alarmHost.vue','targetFile':'\\src\\views\\sprinklerSystem\\components\\listItem\\'},
    {'id':33,'date':'2020-02-20','time':'20:03:17','remark':'flowMeter','sourceFile':'\\src\\views\\sprinklerSystem\\components\\listItem\\flowMeter.vue','targetFile':'\\src\\views\\sprinklerSystem\\components\\listItem\\'},
    {'id':34,'date':'2020-02-22','time':'21:27:16','remark':'liquidMeter','sourceFile':'\\src\\views\\sprinklerSystem\\components\\listItem\\liquidMeter.vue','targetFile':'\\src\\views\\sprinklerSystem\\components\\listItem\\'},
    {'id':35,'date':'2020-02-25','time':'20:14:16','remark':'pressureGage','sourceFile':'\\src\\views\\sprinklerSystem\\components\\listItem\\pressureGage.vue','targetFile':'\\src\\views\\sprinklerSystem\\components\\listItem\\'},
    // 电气火灾  2020-02-----2020-03-10  5条
    {'id':36,'date':'2020-02-26','time':'18:55:19','remark':'electricalDetailDetail','sourceFile':'\\src\\views\\electricalSystem\\child\\electricalDetailDetail.vue','targetFile':'\\src\\views\\electricalSystem\\child\\'},
    {'id':37,'date':'2020-02-28','time':'20:03:17','remark':'electricalSystemDetail','sourceFile':'\\src\\views\\electricalSystem\\child\\electricalSystemDetail.vue','targetFile':'\\src\\views\\electricalSystem\\child\\'},
    {'id':38,'date':'2020-03-01','time':'21:27:16','remark':'electricalSystemDetailIndex','sourceFile':'\\src\\views\\electricalSystem\\child\\electricalSystemDetailIndex.vue','targetFile':'\\src\\views\\electricalSystem\\child\\'},
    {'id':39,'date':'2020-03-02','time':'20:14:16','remark':'electricalSystemHome','sourceFile':'\\src\\views\\electricalSystem\\electricalSystemHome.vue','targetFile':'\\src\\views\\electricalSystem\\'},
    {'id':40,'date':'2020-03-03','time':'20:18:16','remark':'electricalSystemIndex','sourceFile':'\\src\\views\\electricalSystem\\electricalSystemIndex.vue','targetFile':'\\src\\views\\electricalSystem\\'},
    // 消防档案  2020-02-----2020-03-10  3条
    {'id':41,'date':'2020-03-06','time':'18:55:19','remark':'alarmSet','sourceFile':'\\src\\views\\settings\\alarmSet.vue','targetFile':'\\src\\views\\settings\\'},
    {'id':42,'date':'2020-03-07','time':'20:03:17','remark':'faultSet','sourceFile':'\\src\\views\\settings\\faultSet.vue','targetFile':'\\src\\views\\settings\\'},
    {'id':43,'date':'2020-03-08','time':'21:27:16','remark':'screenSet','sourceFile':'\\src\\views\\settings\\screenSet.vue','targetFile':'\\src\\views\\settings\\'},
    // 智能烟感  2020-02-----2020-03-10  3条
    {'id':44,'date':'2020-03-09','time':'18:55:19','remark':'deviceDetail','sourceFile':'\\src\\views\\smoke\\deviceDetail.vue','targetFile':'\\src\\views\\smoke\\'},
    {'id':45,'date':'2020-03-10','time':'20:03:17','remark':'smokeSensationHome','sourceFile':'\\src\\views\\smoke\\smokeSensationHome.vue','targetFile':'\\src\\views\\smoke\\'},
    {'id':46,'date':'2020-03-11','time':'21:27:16','remark':'智能烟感','sourceFile':'\\src\\views\\smoke\\smokeSensationIndex.vue','targetFile':'\\src\\views\\smoke\\'},
    // 视频监控  2020-02-----2020-03-15  3条
    {'id':47,'date':'2020-03-12','time':'18:55:19','remark':'videoMonitorDetail','sourceFile':'\\src\\views\\videoMonitorSystem\\child\\videoMonitorDetail.vue','targetFile':'\\src\\views\\videoMonitorSystem\\child\\'},
    {'id':48,'date':'2020-03-14','time':'20:03:17','remark':'videoMonitorDetailIndex','sourceFile':'\\src\\views\\videoMonitorSystem\\child\\videoMonitorDetailIndex.vue','targetFile':'\\src\\views\\videoMonitorSystem\\child\\'},
    {'id':49,'date':'2020-03-15','time':'21:27:16','remark':'视频监控','sourceFile':'\\src\\views\\videoMonitorSystem\\videoMonitorHome.vue','targetFile':'\\src\\views\\videoMonitorSystem\\'},
    // 监控台  2020-04-----2020-05-06  5条
    {'id':50,'date':'2020-03-12','time':'18:55:19','remark':'监控台','sourceFile':'\\src\\views\\console\\console.vue','targetFile':'\\src\\views\\console\\'},
    {'id':51,'date':'2020-03-14','time':'20:03:17','remark':'监控台22','sourceFile':'\\src\\assets\\images\\add.png','targetFile':'\\src\\assets\\images\\'},
    {'id':52,'date':'2020-03-15','time':'21:27:16','remark':'监控台修改','sourceFile':'\\src\\assets\\images\\appkey_loading.png','targetFile':'\\src\\assets\\images\\'},
    {'id':53,'date':'2020-03-15','time':'14:29:01','remark':'监控台增加故障逻辑','sourceFile':'\\src\\assets\\images\\build.png','targetFile':'\\src\\assets\\images\\'},
    {'id':54,'date':'2020-03-15','time':'11:25:16','remark':'alot','sourceFile':'\\src\\assets\\images\\calendar.png','targetFile':'\\src\\assets\\images\\'},
    // 监管中心  2020-05-----2020-05-09  5条
    {'id':55,'date':'2020-03-12','time':'18:55:19','remark':'监管中心','sourceFile':'\\src\\views\\monitorCenter\\monitorCenter.vue','targetFile':'\\src\\views\\monitorCenter\\'},
    {'id':56,'date':'2020-03-14','time':'20:03:17','remark':'监管中心修改','sourceFile':'\\src\\assets\\images\\daoru.png','targetFile':'\\src\\assets\\images\\'},
    {'id':57,'date':'2020-03-15','time':'21:27:16','remark':'监管中心更换图片','sourceFile':'\\src\\assets\\images\\delete.png','targetFile':'\\src\\assets\\images\\'},
    {'id':58,'date':'2020-03-15','time':'11:27:19','remark':'监管中心优化','sourceFile':'\\src\\assets\\images\\edit.png','targetFile':'\\src\\assets\\images\\'},
    {'id':59,'date':'2020-03-15','time':'16:28:16','remark':'noth','sourceFile':'\\src\\assets\\images\\export.png','targetFile':'\\src\\assets\\images\\'},
    // 风系统  2020-05-----2020-06-20  8条
    {'id':60,'date':'2020-05-04','time':'18:55:19','remark':'windSystemHome','sourceFile':'\\src\\views\\windSystem\\windSystemHome.vue','targetFile':'\\src\\views\\windSystem\\'},
    {'id':61,'date':'2020-05-14','time':'20:03:17','remark':'windSystemIndex','sourceFile':'\\src\\views\\windSystem\\windSystemIndex.vue','targetFile':'\\src\\views\\windSystem\\'},
    {'id':62,'date':'2020-05-20','time':'21:27:16','remark':'windSystemDetail','sourceFile':'\\src\\views\\windSystem\\child\\windSystemDetail.vue','targetFile':'\\src\\views\\windSystem\\child\\'},
    {'id':63,'date':'2020-05-21','time':'16:03:16','remark':'windSystemDetailIndex','sourceFile':'\\src\\views\\windSystem\\child\\windSystemDetailIndex.vue','targetFile':'\\src\\views\\windSystem\\child\\'},
    {'id':64,'date':'2020-06-03','time':'21:03:18','remark':'alarmHost','sourceFile':'\\src\\views\\windSystem\\components\\listItem\\alarmHost.vue','targetFile':'\\src\\views\\windSystem\\components\\listItem\\'},
    {'id':65,'date':'2020-06-13','time':'16:03:17','remark':'differentPressureGage','sourceFile':'\\src\\views\\windSystem\\components\\listItem\\differentPressureGage.vue','targetFile':'\\src\\views\\windSystem\\components\\listItem\\'},
    {'id':66,'date':'2020-06-18','time':'21:27:16','remark':'windMachine','sourceFile':'\\src\\views\\windSystem\\components\\listItem\\windMachine.vue','targetFile':'\\src\\views\\windSystem\\components\\listItem\\'},
    {'id':67,'date':'2020-06-20','time':'16:03:16','remark':'风系统','sourceFile':'\\src\\views\\windSystem\\components\\detailItem\\alarmHost.vue','targetFile':'\\src\\views\\windSystem\\components\\detailItem\\'},
];
const logArrWpd = [
    // 智能体检  2020-07-01----2020-11-30  15条  吴培东
    {'id':68,'date':'2020-07-04','time':'11:25:36','remark':'buildingExamineDetail','sourceFile':'\\src\\views\\buildingManage\\child\\buildingExamineDetail.vue','targetFile':'\\src\\views\\buildingManage\\child\\'},
    {'id':69,'date':'2020-07-11','time':'18:55:19','remark':'buildingManageDetail','sourceFile':'\\src\\views\\buildingManage\\child\\buildingManageDetail.vue','targetFile':'\\src\\views\\buildingManage\\child\\'},
    {'id':70,'date':'2020-07-20','time':'20:03:17','remark':'buildingManageDetailIndex','sourceFile':'\\src\\views\\buildingManage\\child\\buildingManageDetailIndex.vue','targetFile':'\\src\\views\\buildingManage\\child\\'},
    {'id':71,'date':'2020-08-12','time':'21:27:16','remark':'check项目','sourceFile':'\\src\\views\\buildingManage\\child\\examineCheckItemDetail.vue','targetFile':'\\src\\views\\buildingManage\\child\\'},
    {'id':72,'date':'2020-08-18','time':'16:03:16','remark':'examineResultMain','sourceFile':'\\src\\views\\buildingManage\\child\\examineResultMain.vue','targetFile':'\\src\\views\\buildingManage\\child\\'},
    {'id':73,'date':'2020-08-22','time':'22:52:18','remark':'examineResultMainIndex','sourceFile':'\\src\\views\\buildingManage\\child\\examineResultMainIndex.vue','targetFile':'\\src\\views\\buildingManage\\child\\'},
    {'id':74,'date':'2020-09-20','time':'14:44:17','remark':'examineResultTabDetail','sourceFile':'\\src\\views\\buildingManage\\child\\components\\examineResultTabDetail.vue','targetFile':'\\src\\views\\buildingManage\\child\\components\\'},
    {'id':75,'date':'2020-09-25','time':'22:48:14','remark':'体检分数','sourceFile':'\\src\\views\\buildingManage\\child\\components\\examineSafeScore.vue','targetFile':'\\src\\views\\buildingManage\\child\\components\\'},
    {'id':76,'date':'2020-10-15','time':'16:45:12','remark':'状态修改','sourceFile':'\\src\\views\\buildingManage\\child\\components\\examineStatusList.vue','targetFile':'\\src\\views\\buildingManage\\child\\components\\'},
    {'id':77,'date':'2020-10-18','time':'15:27:11','remark':'baseInfo','sourceFile':'\\src\\views\\buildingManage\\components\\baseInfo.vue','targetFile':'\\src\\views\\buildingManage\\components\\'},
    {'id':78,'date':'2020-10-21','time':'13:15:16','remark':'预览','sourceFile':'\\src\\views\\buildingManage\\components\\buildingOverView.vue','targetFile':'\\src\\views\\buildingManage\\components\\'},
    {'id':79,'date':'2020-11-12','time':'10:14:18','remark':'personInfo','sourceFile':'\\src\\views\\buildingManage\\components\\personInfo.vue','targetFile':'\\src\\views\\buildingManage\\components\\'},
    {'id':80,'date':'2020-11-18','time':'20:22:17','remark':'点位管理','sourceFile':'\\src\\views\\buildingManage\\components\\pointManage.vue','targetFile':'\\src\\views\\buildingManage\\components\\'},
    {'id':81,'date':'2020-11-25','time':'23:27:20','remark':'buildingManageHome','sourceFile':'\\src\\views\\buildingManage\\buildingManageHome.vue','targetFile':'\\src\\views\\buildingManage\\'},
    {'id':82,'date':'2020-11-28','time':'20:03:16','remark':'buildingManageIndex','sourceFile':'\\src\\views\\buildingManage\\buildingManageIndex.vue','targetFile':'\\src\\views\\buildingManage\\'},
];
const logArrAfter = [
    // 月报  2020-12----2021-01  10条  
    {'id':83,'date':'2020-12-05','time':'11:25:36','remark':'monthlyReportMain','sourceFile':'\\src\\views\\monthlyReport\\component\\monthlyReportMain.vue','targetFile':'\\src\\views\\monthlyReport\\component\\'},
    {'id':84,'date':'2020-12-12','time':'18:55:19','remark':'wbOne','sourceFile':'\\src\\views\\monthlyReport\\component\\wbOne.vue','targetFile':'\\src\\views\\monthlyReport\\component\\'},
    {'id':85,'date':'2020-12-15','time':'20:03:17','remark':'wbTwo','sourceFile':'\\src\\views\\monthlyReport\\component\\wbTwo.vue','targetFile':'\\src\\views\\monthlyReport\\component\\'},
    {'id':86,'date':'2020-12-18','time':'21:27:16','remark':'月报首页','sourceFile':'\\src\\views\\monthlyReport\\monthlyReportHome.vue','targetFile':'\\src\\views\\monthlyReport\\'},
    {'id':87,'date':'2020-12-25','time':'16:03:16','remark':'filter','sourceFile':'\\src\\assets\\images\\filter.png','targetFile':'\\src\\assets\\images\\'},
    {'id':88,'date':'2020-12-28','time':'22:52:18','remark':'map_point','sourceFile':'\\src\\assets\\images\\map_point.png','targetFile':'\\src\\assets\\images\\'},
    {'id':89,'date':'2021-01-05','time':'14:44:17','remark':'menu_do','sourceFile':'\\src\\assets\\images\\menu_do.png','targetFile':'\\src\\assets\\images\\'},
    {'id':90,'date':'2021-01-10','time':'22:48:14','remark':'no_model_icon','sourceFile':'\\src\\assets\\images\\no_model_icon.png','targetFile':'\\src\\assets\\images\\'},
    {'id':91,'date':'2021-01-15','time':'16:45:12','remark':'noDevice','sourceFile':'\\src\\assets\\images\\noDevice.png','targetFile':'\\src\\assets\\images\\'},
    {'id':92,'date':'2021-01-20','time':'15:27:11','remark':'noStation','sourceFile':'\\src\\assets\\images\\noStation.png','targetFile':'\\src\\assets\\images\\'},
    // 隐患  2021-02  4条  
    {'id':93,'date':'2021-02-02','time':'11:25:36','remark':'riskDetail','sourceFile':'\\src\\views\\risk\\child\\riskDetail.vue','targetFile':'\\src\\views\\risk\\child\\'},
    {'id':94,'date':'2021-02-10','time':'18:55:19','remark':'riskDetailIndex','sourceFile':'\\src\\views\\risk\\child\\riskDetailIndex.vue','targetFile':'\\src\\views\\risk\\child\\'},
    {'id':95,'date':'2021-02-13','time':'20:03:17','remark':'riskList','sourceFile':'\\src\\views\\risk\\child\\riskList.vue','targetFile':'\\src\\views\\risk\\child\\'},
    {'id':96,'date':'2021-02-16','time':'21:27:16','remark':'riskHome','sourceFile':'\\src\\views\\risk\\riskHome.vue','targetFile':'\\src\\views\\risk\\'},
    // 防火分隔监控  2021-03  5条  
    {'id':97,'date':'2021-03-03','time':'11:25:36','remark':'fireSeparationDetail','sourceFile':'\\src\\views\\fireSeparation\\child\\fireSeparationDetail.vue','targetFile':'\\src\\views\\fireSeparation\\child\\'},
    {'id':98,'date':'2021-03-08','time':'18:55:19','remark':'防火分隔监控','sourceFile':'\\src\\views\\fireSeparation\\child\\fireSeparationDetailIndex.vue','targetFile':'\\src\\views\\fireSeparation\\child\\'},
    {'id':99,'date':'2021-03-12','time':'20:03:17','remark':'fireDoor','sourceFile':'\\src\\views\\fireSeparation\\components\\listItem\\fireDoor.vue','targetFile':'\\src\\views\\fireSeparation\\components\\listItem\\'},
    {'id':100,'date':'2021-03-16','time':'21:27:16','remark':'fireShutterDoor','sourceFile':'\\src\\views\\fireSeparation\\components\\listItem\\fireShutterDoor.vue','targetFile':'\\src\\views\\fireSeparation\\'},
    {'id':101,'date':'2021-03-19','time':'23:15:46','remark':'fireSeparationHome','sourceFile':'\\src\\views\\fireSeparation\\fireSeparationHome.vue','targetFile':'\\src\\views\\fireSeparation\\'},
    // 建筑物季度报表  2021-04  5条  
    {'id':102,'date':'2021-04-02','time':'11:25:36','remark':'quarterlyReportMain','sourceFile':'\\src\\views\\quarterlyReport\\component\\quarterlyReportMain.vue','targetFile':'\\src\\views\\quarterlyReport\\component\\'},
    {'id':103,'date':'2021-04-09','time':'18:55:19','remark':'报表2','sourceFile':'\\src\\views\\quarterlyReport\\component\\wbTwo.vue','targetFile':'\\src\\views\\quarterlyReport\\component\\'},
    {'id':104,'date':'2021-04-11','time':'20:03:17','remark':'noDevicePoint','sourceFile':'\\src\\assets\\images\\noDevicePoint.png','targetFile':'\\src\\assets\\images\\'},
    {'id':105,'date':'2021-04-15','time':'21:27:16','remark':'station','sourceFile':'\\src\\assets\\images\\station.png','targetFile':'\\src\\assets\\images\\'},
    {'id':106,'date':'2021-04-21','time':'23:15:46','remark':'quarterlyReportHome','sourceFile':'\\src\\views\\quarterlyReport\\quarterlyReportHome.vue','targetFile':'\\src\\views\\quarterlyReport\\'},
    // 门禁系统监控  2021-05  6条  
    {'id':107,'date':'2021-05-08','time':'11:25:36','remark':'videoMonitorDetail','sourceFile':'\\src\\views\\videoFusionMonitor\\child\\videoMonitorDetail.vue','targetFile':'\\src\\views\\videoFusionMonitor\\child\\'},
    {'id':108,'date':'2021-05-11','time':'18:55:19','remark':'videoMonitorDetailIndex','sourceFile':'\\src\\views\\videoFusionMonitor\\child\\videoMonitorDetailIndex.vue','targetFile':'\\src\\views\\videoFusionMonitor\\child\\'},
    {'id':109,'date':'2021-05-18','time':'20:03:17','remark':'alarmEventList','sourceFile':'\\src\\views\\videoFusionMonitor\\component\\alarmEventList.vue','targetFile':'\\src\\views\\videoFusionMonitor\\component\\'},
    {'id':110,'date':'2021-05-25','time':'21:27:16','remark':'videoMonitorHome','sourceFile':'\\src\\views\\videoFusionMonitor\\videoMonitorHome.vue','targetFile':'\\src\\views\\videoFusionMonitor\\'},
    {'id':111,'date':'2021-05-27','time':'23:15:46','remark':'videoMonitorIndex','sourceFile':'\\src\\views\\videoFusionMonitor\\videoMonitorIndex.vue','targetFile':'\\src\\views\\videoFusionMonitor\\'},
    {'id':112,'date':'2021-05-29','time':'11:25:36','remark':'视频门禁列表','sourceFile':'\\src\\views\\videoFusionMonitor\\component\\videoMonitorList.vue','targetFile':'\\src\\views\\videoFusionMonitor\\component\\'},
    // 温湿度监控  2021-06  6条  
    {'id':113,'date':'2021-06-01','time':'18:55:19','remark':'temperatureHumidityDetail','sourceFile':'\\src\\views\\temperatureHumidity\\child\\temperatureHumidityDetail.vue','targetFile':'\\src\\views\\temperatureHumidity\\child\\'},
    {'id':114,'date':'2021-06-04','time':'20:03:17','remark':'temperatureHumidityDetailIndex','sourceFile':'\\src\\views\\temperatureHumidity\\child\\temperatureHumidityDetailIndex.vue','targetFile':'\\src\\views\\temperatureHumidity\\child\\'},
    {'id':115,'date':'2021-06-08','time':'21:27:16','remark':'temperatureHumidity','sourceFile':'\\src\\views\\temperatureHumidity\\components\\detailItem\\temperatureHumidity.vue','targetFile':'\\src\\views\\temperatureHumidity\\components\\detailItem\\'},
    {'id':116,'date':'2021-06-11','time':'23:15:46','remark':'temperatureHumidityHome','sourceFile':'\\src\\views\\temperatureHumidity\\temperatureHumidityHome.vue','targetFile':'\\src\\views\\temperatureHumidity\\'},
    {'id':117,'date':'2021-06-24','time':'11:25:36','remark':'temperatureHumidityIndex','sourceFile':'\\src\\views\\temperatureHumidity\\temperatureHumidityIndex.vue','targetFile':'\\src\\views\\temperatureHumidity\\'},
    {'id':118,'date':'2021-06-28','time':'18:35:19','remark':'温湿度完成','sourceFile':'\\src\\views\\temperatureHumidity\\components\\listItem\\temperatureHumidity.vue','targetFile':'\\src\\views\\temperatureHumidity\\components\\listItem\\'},
    // 事件自动处理及报警通知人优化  2021-07  4条
    {'id':119,'date':'2021-07-01','time':'20:03:17','remark':'更新方法','sourceFile':'\\src\\assets\\js\\tool.js','targetFile':'\\src\\assets\\js\\'},
    {'id':120,'date':'2021-07-10','time':'21:27:16','remark':'更换图片','sourceFile':'\\src\\assets\\images\\examine\\checkitem0.png','targetFile':'\\src\\assets\\images\\examine\\'},
    {'id':121,'date':'2021-07-13','time':'11:25:36','remark':'守护计划','sourceFile':'\\src\\assets\\images\\examine\\data_protect.png','targetFile':'\\src\\assets\\images\\examine\\'},
    {'id':122,'date':'2021-07-18','time':'18:55:19','remark':'修改mqtt逻辑','sourceFile':'\\src\\assets\\js\\mqtt.js','targetFile':'\\src\\assets\\js\\'},
    // 风险评估优化及维保报告生成  2021-08  4条  
    {'id':123,'date':'2021-08-02','time':'20:03:17','remark':'维保内容修改','sourceFile':'\\src\\views\\maintenanceSupervise\\component\\waterCircle.vue','targetFile':'\\src\\views\\maintenanceSupervise\\component\\'},
    {'id':124,'date':'2021-08-10','time':'21:27:14','remark':'图标动画','sourceFile':'\\src\\assets\\lottie\\electric_anima.json','targetFile':'\\src\\assets\\lottie\\'},
    {'id':125,'date':'2021-08-13','time':'11:24:16','remark':'动画修改速率','sourceFile':'\\src\\assets\\lottie\\examineAnimation.json','targetFile':'\\src\\assets\\lottie\\'},
    {'id':126,'date':'2021-08-20','time':'20:14:17','remark':'maintenanceSupervise','sourceFile':'\\src\\views\\maintenanceSupervise\\maintenanceSupervise.vue','targetFile':'\\src\\views\\maintenanceSupervise\\'},
];
module.exports = logArrAfter;