(function($){
	//表格
	var tableData = [{"rTime":1455724800000,"quilty":"甲","patientId":954,"age":48,"name":"吴亚晴","cTime":1456502400000,"sex":"女"},{"rTime":1455811200000,"quilty":"甲","patientId":955,"age":35,"name":"池小宁","cTime":1456416000000,"sex":"男"},{"rTime":1456070400000,"quilty":"甲","patientId":956,"age":32,"name":"林子善","cTime":1456588800000,"sex":"男"},{"rTime":1456329600000,"quilty":"乙","patientId":957,"age":14,"name":"吴兴国","cTime":1456934400000,"sex":"男"},{"rTime":1456502400000,"quilty":"甲","patientId":958,"age":26,"name":"白胜祥","cTime":1457193600000,"sex":"男"},{"rTime":1456588800000,"quilty":"乙","patientId":959,"age":37,"name":"尚静","cTime":1457366400000,"sex":"女"},{"rTime":1456761600000,"quilty":"甲","patientId":960,"age":28,"name":"许青云","cTime":1457539200000,"sex":"男"},{"rTime":1456848000000,"quilty":"甲","patientId":961,"age":34,"name":"孙琳","cTime":1457452800000,"sex":"女"},{"rTime":1457020800000,"quilty":"甲","patientId":962,"age":42,"name":"李欣","cTime":1457625600000,"sex":"女"},{"rTime":1457193600000,"quilty":"甲","patientId":963,"age":21,"name":"刘艳丽","cTime":1457798400000,"sex":"女"},{"rTime":1457452800000,"quilty":"甲","patientId":964,"age":28,"name":"李雪飞","cTime":1457971200000,"sex":"女"},{"rTime":1457539200000,"quilty":"甲","patientId":965,"age":36,"name":"毕凯","cTime":1458489600000,"sex":"男"},{"rTime":1457798400000,"quilty":"甲","patientId":966,"age":71,"name":"何兰兰","cTime":1458748800000,"sex":"女"},{"rTime":1457884800000,"quilty":"乙","patientId":967,"age":87,"name":"朱晓姝","cTime":1459094400000,"sex":"女"},{"rTime":1458144000000,"quilty":"甲","patientId":968,"age":25,"name":"唐琪","cTime":1459353600000,"sex":"女"},{"rTime":1458316800000,"quilty":"甲","patientId":969,"age":64,"name":"孟竹","cTime":1459440000000,"sex":"男"},{"rTime":1458403200000,"quilty":"甲","patientId":970,"age":47,"name":"周伟","cTime":1459699200000,"sex":"男"},{"rTime":1458576000000,"quilty":"甲","patientId":971,"age":39,"name":"卜严峻","cTime":1459785600000,"sex":"男"},{"rTime":1458576000000,"quilty":"甲","patientId":972,"age":47,"name":"谷静","cTime":1459699200000,"sex":"女"},{"rTime":1459180800000,"quilty":"甲","patientId":973,"age":31,"name":"刘佳","cTime":1460217600000,"sex":"女"}];
	//基本信息
	var INP_PAT_BASIC_INFO = [{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"其他","PATIENT_ID":954,"AGE":48,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"女","CREATE_NAME":"郭陆武","CREATE_DATETIME":1455724800000},{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"文员","PATIENT_ID":955,"AGE":35,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"男","CREATE_NAME":"贵奂","CREATE_DATETIME":1455811200000},{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"个体户","PATIENT_ID":956,"AGE":32,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"男","CREATE_NAME":"杨诗琪","CREATE_DATETIME":1456070400000},{"MARITAL_STATUS":"未婚","OCCUPATIENTION":"个体户","PATIENT_ID":957,"AGE":14,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"男","CREATE_NAME":"李雅文","CREATE_DATETIME":1456329600000},{"MARITAL_STATUS":"未婚","OCCUPATIENTION":"个体户","PATIENT_ID":958,"AGE":26,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"男","CREATE_NAME":"唐行轲","CREATE_DATETIME":1456502400000},{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"其他","PATIENT_ID":959,"AGE":37,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"女","CREATE_NAME":"周奕","CREATE_DATETIME":1456588800000},{"MARITAL_STATUS":"未婚","OCCUPATIENTION":"个体户","PATIENT_ID":960,"AGE":28,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"男","CREATE_NAME":"谭丽","CREATE_DATETIME":1456761600000},{"MARITAL_STATUS":"未婚","OCCUPATIENTION":"个体户","PATIENT_ID":961,"AGE":34,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"女","CREATE_NAME":"张小林","CREATE_DATETIME":1456848000000},{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"个体户","PATIENT_ID":962,"AGE":42,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"女","CREATE_NAME":"杨玲","CREATE_DATETIME":1457020800000},{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"个体户","PATIENT_ID":963,"AGE":21,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"女","CREATE_NAME":"屈鑫燕","CREATE_DATETIME":1457193600000},{"MARITAL_STATUS":"未婚","OCCUPATIENTION":"其他","PATIENT_ID":964,"AGE":28,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"女","CREATE_NAME":"薛槐敏","CREATE_DATETIME":1457452800000},{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"个体户","PATIENT_ID":965,"AGE":36,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"男","CREATE_NAME":"陈小红","CREATE_DATETIME":1457539200000},{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"编导","PATIENT_ID":966,"AGE":71,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"女","CREATE_NAME":"朱翼","CREATE_DATETIME":1457798400000},{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"工人","PATIENT_ID":967,"AGE":87,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"女","CREATE_NAME":"潘千","CREATE_DATETIME":1457884800000},{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"主持人","PATIENT_ID":968,"AGE":25,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"女","CREATE_NAME":"张恒","CREATE_DATETIME":1458144000000},{"MARITAL_STATUS":"未婚","OCCUPATIENTION":"导演","PATIENT_ID":969,"AGE":64,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"男","CREATE_NAME":"谢文婷","CREATE_DATETIME":1458316800000},{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"美甲师","PATIENT_ID":970,"AGE":47,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"男","CREATE_NAME":"冯瑾娜","CREATE_DATETIME":1458403200000},{"MARITAL_STATUS":"未婚","OCCUPATIENTION":"厨师","PATIENT_ID":971,"AGE":39,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"男","CREATE_NAME":"张英","CREATE_DATETIME":1458576000000},{"MARITAL_STATUS":"已婚","OCCUPATIENTION":"快递员","PATIENT_ID":972,"AGE":47,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"女","CREATE_NAME":"王琳","CREATE_DATETIME":1458576000000},{"MARITAL_STATUS":"未婚","OCCUPATIENTION":"其他","PATIENT_ID":973,"AGE":31,"NATIONNALITY":"中国","NATION":"汉族","SEX_NAME":"女","CREATE_NAME":"汪海源","CREATE_DATETIME":1459180800000}];
	//病历
	var INP_OUTP_MR = [{"PATIENT_SOURCE":1,"PATIENT_ID":954,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":7500,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"银屑病，高血脂，高血压"},{"PATIENT_SOURCE":1,"PATIENT_ID":955,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":3842,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"皮症"},{"PATIENT_SOURCE":3,"PATIENT_ID":956,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":3864,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"皮症"},{"PATIENT_SOURCE":1,"PATIENT_ID":957,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":3747,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"高血脂"},{"PATIENT_SOURCE":1,"PATIENT_ID":958,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":2949,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"高血压"},{"PATIENT_SOURCE":3,"PATIENT_ID":959,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":3056,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":1,"PATIENT_ID":960,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":3843,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":2,"PATIENT_ID":961,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":3370,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":2,"PATIENT_ID":962,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":4255,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":3,"PATIENT_ID":963,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":2883,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":2,"PATIENT_ID":964,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":2225,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":2,"PATIENT_ID":965,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":3726,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":1,"PATIENT_ID":966,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":3227,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":1,"PATIENT_ID":967,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":4283,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":3,"PATIENT_ID":968,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":2982,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":2,"PATIENT_ID":969,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":3522,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":3,"PATIENT_ID":970,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":2122,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":2,"PATIENT_ID":971,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":3711,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":3,"PATIENT_ID":972,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":4315,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"},{"PATIENT_SOURCE":2,"PATIENT_ID":973,"PHYSICAL_EXAM":"正常","OUTP_COST_AMOUNT":3973,"CHIEF_COMPLAINT":"皮肤异常","PAST_HISTORY":"无","ALLERGY_HISTORY_FLAG":false,"DEPT_NAME":"31病区普外科","PRESENT_DISEASE_HISTORY":"无"}];
	//诊断
	var INP_OUTP_DIAG_INFO = [{"PATIENT_ID":954,"DIAG_DATETIME":1455724800000,"MASTER_FLAG":1,"DEPT_NAME":"31病区普外科","DIAG_NAME":"高血脂","TREAT_RESULT":"未治愈"},{"PATIENT_ID":955,"DIAG_DATETIME":1455811200000,"MASTER_FLAG":1,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":956,"DIAG_DATETIME":1456070400000,"MASTER_FLAG":2,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":957,"DIAG_DATETIME":1456329600000,"MASTER_FLAG":2,"DEPT_NAME":"31病区普外科","DIAG_NAME":"高血脂","TREAT_RESULT":"治愈"},{"PATIENT_ID":958,"DIAG_DATETIME":1456502400000,"MASTER_FLAG":2,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":959,"DIAG_DATETIME":1456588800000,"MASTER_FLAG":2,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":960,"DIAG_DATETIME":1456761600000,"MASTER_FLAG":1,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":961,"DIAG_DATETIME":1456848000000,"MASTER_FLAG":1,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":962,"DIAG_DATETIME":1457020800000,"MASTER_FLAG":1,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":963,"DIAG_DATETIME":1457193600000,"MASTER_FLAG":2,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":964,"DIAG_DATETIME":1457452800000,"MASTER_FLAG":2,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":965,"DIAG_DATETIME":1457539200000,"MASTER_FLAG":1,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":966,"DIAG_DATETIME":1457798400000,"MASTER_FLAG":2,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":967,"DIAG_DATETIME":1457884800000,"MASTER_FLAG":1,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":968,"DIAG_DATETIME":1458144000000,"MASTER_FLAG":1,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":969,"DIAG_DATETIME":1458316800000,"MASTER_FLAG":2,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":970,"DIAG_DATETIME":1458403200000,"MASTER_FLAG":1,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":971,"DIAG_DATETIME":1458576000000,"MASTER_FLAG":2,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":972,"DIAG_DATETIME":1458576000000,"MASTER_FLAG":1,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"},{"PATIENT_ID":973,"DIAG_DATETIME":1459180800000,"MASTER_FLAG":2,"DEPT_NAME":"31病区普外科","DIAG_NAME":"寻常型斑块型","TREAT_RESULT":"治愈"}];
	//医嘱
	var INP_OUTP_ADVICE = [{"PATIENT_ID":954,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1455724800000,"DRUG_USAGE_FREQUENCY":"2","ADVICE_REMARK":"少吃辣","DRUG_USAGE_WAY":"口服","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.25","DURATION_TIME":"30","DRUG_SPEC":"0.25g","ADVICE_SOURCE":1},{"PATIENT_ID":955,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1455811200000,"DRUG_USAGE_FREQUENCY":"1","ADVICE_REMARK":"少吃辣","DRUG_USAGE_WAY":"外敷","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.25","DURATION_TIME":"24","DRUG_SPEC":"0.25g","ADVICE_SOURCE":1},{"PATIENT_ID":956,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1456070400000,"DRUG_USAGE_FREQUENCY":"1","ADVICE_REMARK":"少吃辣","DRUG_USAGE_WAY":"口服","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.26","DURATION_TIME":"7","DRUG_SPEC":"0.26g","ADVICE_SOURCE":1},{"PATIENT_ID":957,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1456329600000,"DRUG_USAGE_FREQUENCY":"2","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"外敷","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.27","DURATION_TIME":"19","DRUG_SPEC":"0.27g","ADVICE_SOURCE":1},{"PATIENT_ID":958,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1456502400000,"DRUG_USAGE_FREQUENCY":"3","ADVICE_REMARK":"少吃辣","DRUG_USAGE_WAY":"口服","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.28","DURATION_TIME":"7","DRUG_SPEC":"0.28g","ADVICE_SOURCE":1},{"PATIENT_ID":959,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1456588800000,"DRUG_USAGE_FREQUENCY":"3","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"外敷","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.29","DURATION_TIME":"21","DRUG_SPEC":"0.29g","ADVICE_SOURCE":3},{"PATIENT_ID":960,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1456761600000,"DRUG_USAGE_FREQUENCY":"3","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"口服","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.3","DURATION_TIME":"16","DRUG_SPEC":"0.30g","ADVICE_SOURCE":3},{"PATIENT_ID":961,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1456848000000,"DRUG_USAGE_FREQUENCY":"1","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"外敷","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.31","DURATION_TIME":"12","DRUG_SPEC":"0.31g","ADVICE_SOURCE":1},{"PATIENT_ID":962,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1457020800000,"DRUG_USAGE_FREQUENCY":"3","ADVICE_REMARK":"少吃辣","DRUG_USAGE_WAY":"口服","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.32","DURATION_TIME":"5","DRUG_SPEC":"0.32g","ADVICE_SOURCE":2},{"PATIENT_ID":963,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1457193600000,"DRUG_USAGE_FREQUENCY":"3","ADVICE_REMARK":"少吃辣","DRUG_USAGE_WAY":"外敷","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.33","DURATION_TIME":"14","DRUG_SPEC":"0.33g","ADVICE_SOURCE":2},{"PATIENT_ID":964,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1457452800000,"DRUG_USAGE_FREQUENCY":"1","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"外敷","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.34","DURATION_TIME":"15","DRUG_SPEC":"0.34g","ADVICE_SOURCE":3},{"PATIENT_ID":965,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1457539200000,"DRUG_USAGE_FREQUENCY":"1","ADVICE_REMARK":"少吃辣","DRUG_USAGE_WAY":"外敷","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.35","DURATION_TIME":"11","DRUG_SPEC":"0.35g","ADVICE_SOURCE":2},{"PATIENT_ID":966,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1457798400000,"DRUG_USAGE_FREQUENCY":"1","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"外敷","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.36","DURATION_TIME":"14","DRUG_SPEC":"0.36g","ADVICE_SOURCE":1},{"PATIENT_ID":967,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1457884800000,"DRUG_USAGE_FREQUENCY":"2","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"口服","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.37","DURATION_TIME":"15","DRUG_SPEC":"0.37g","ADVICE_SOURCE":1},{"PATIENT_ID":968,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1458144000000,"DRUG_USAGE_FREQUENCY":"2","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"口服","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.38","DURATION_TIME":"13","DRUG_SPEC":"0.38g","ADVICE_SOURCE":3},{"PATIENT_ID":969,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1458316800000,"DRUG_USAGE_FREQUENCY":"3","ADVICE_REMARK":"少吃辣","DRUG_USAGE_WAY":"口服","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.39","DURATION_TIME":"27","DRUG_SPEC":"0.39g","ADVICE_SOURCE":3},{"PATIENT_ID":970,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1458403200000,"DRUG_USAGE_FREQUENCY":"1","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"口服","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.4","DURATION_TIME":"22","DRUG_SPEC":"0.40g","ADVICE_SOURCE":1},{"PATIENT_ID":971,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1458576000000,"DRUG_USAGE_FREQUENCY":"1","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"口服","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.41","DURATION_TIME":"5","DRUG_SPEC":"0.41g","ADVICE_SOURCE":2},{"PATIENT_ID":972,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1458576000000,"DRUG_USAGE_FREQUENCY":"2","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"外敷","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.42","DURATION_TIME":"5","DRUG_SPEC":"0.42g","ADVICE_SOURCE":3},{"PATIENT_ID":973,"ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ADVICE_OPEN_DATETIME":1459180800000,"DRUG_USAGE_FREQUENCY":"3","ADVICE_REMARK":"注意休息","DRUG_USAGE_WAY":"口服","DURATION_TIME_UNIT":"天","DRUG_DOSAGE":"0.43","DURATION_TIME":"26","DRUG_SPEC":"0.43g","ADVICE_SOURCE":2}];
	
	//处方
	var INP_OUTP_RECIPE = [{"RECIPE_TYPE_CODE":2,"RECIPE_OPEN_DATE":1455724800000,"PATIENT_ID":954,"DISPENSING_PERSON_NAME":"马德新","ALLOCATE_PERSON_NAME":"马德新","RECIPE_COSTS_AMOUNT":3200,"VERIFY_PERSON_NAME":"马德新","RECIPE_OPENDOCTOR_NAME":"马德新","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":1,"RECIPE_OPEN_DATE":1455811200000,"PATIENT_ID":955,"DISPENSING_PERSON_NAME":"郭陆武","ALLOCATE_PERSON_NAME":"郭陆武","RECIPE_COSTS_AMOUNT":548,"VERIFY_PERSON_NAME":"郭陆武","RECIPE_OPENDOCTOR_NAME":"郭陆武","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":2,"RECIPE_OPEN_DATE":1456070400000,"PATIENT_ID":956,"DISPENSING_PERSON_NAME":"贵奂","ALLOCATE_PERSON_NAME":"贵奂","RECIPE_COSTS_AMOUNT":869,"VERIFY_PERSON_NAME":"贵奂","RECIPE_OPENDOCTOR_NAME":"贵奂","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":1,"RECIPE_OPEN_DATE":1456329600000,"PATIENT_ID":957,"DISPENSING_PERSON_NAME":"杨诗琪","ALLOCATE_PERSON_NAME":"杨诗琪","RECIPE_COSTS_AMOUNT":284,"VERIFY_PERSON_NAME":"杨诗琪","RECIPE_OPENDOCTOR_NAME":"杨诗琪","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":3,"RECIPE_OPEN_DATE":1456502400000,"PATIENT_ID":958,"DISPENSING_PERSON_NAME":"李雅文","ALLOCATE_PERSON_NAME":"李雅文","RECIPE_COSTS_AMOUNT":924,"VERIFY_PERSON_NAME":"李雅文","RECIPE_OPENDOCTOR_NAME":"李雅文","RECIPE_EFFECTIVE_DAY":40},{"RECIPE_TYPE_CODE":1,"RECIPE_OPEN_DATE":1456588800000,"PATIENT_ID":959,"DISPENSING_PERSON_NAME":"唐行轲","ALLOCATE_PERSON_NAME":"唐行轲","RECIPE_COSTS_AMOUNT":314,"VERIFY_PERSON_NAME":"唐行轲","RECIPE_OPENDOCTOR_NAME":"唐行轲","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":3,"RECIPE_OPEN_DATE":1456761600000,"PATIENT_ID":960,"DISPENSING_PERSON_NAME":"周奕","ALLOCATE_PERSON_NAME":"周奕","RECIPE_COSTS_AMOUNT":941,"VERIFY_PERSON_NAME":"周奕","RECIPE_OPENDOCTOR_NAME":"周奕","RECIPE_EFFECTIVE_DAY":50},{"RECIPE_TYPE_CODE":3,"RECIPE_OPEN_DATE":1456848000000,"PATIENT_ID":961,"DISPENSING_PERSON_NAME":"谭丽","ALLOCATE_PERSON_NAME":"谭丽","RECIPE_COSTS_AMOUNT":774,"VERIFY_PERSON_NAME":"谭丽","RECIPE_OPENDOCTOR_NAME":"谭丽","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":3,"RECIPE_OPEN_DATE":1457020800000,"PATIENT_ID":962,"DISPENSING_PERSON_NAME":"张小林","ALLOCATE_PERSON_NAME":"张小林","RECIPE_COSTS_AMOUNT":437,"VERIFY_PERSON_NAME":"张小林","RECIPE_OPENDOCTOR_NAME":"张小林","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":1,"RECIPE_OPEN_DATE":1457193600000,"PATIENT_ID":963,"DISPENSING_PERSON_NAME":"杨玲","ALLOCATE_PERSON_NAME":"杨玲","RECIPE_COSTS_AMOUNT":925,"VERIFY_PERSON_NAME":"杨玲","RECIPE_OPENDOCTOR_NAME":"杨玲","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":1,"RECIPE_OPEN_DATE":1457452800000,"PATIENT_ID":964,"DISPENSING_PERSON_NAME":"屈鑫燕","ALLOCATE_PERSON_NAME":"屈鑫燕","RECIPE_COSTS_AMOUNT":431,"VERIFY_PERSON_NAME":"屈鑫燕","RECIPE_OPENDOCTOR_NAME":"屈鑫燕","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":3,"RECIPE_OPEN_DATE":1457539200000,"PATIENT_ID":965,"DISPENSING_PERSON_NAME":"薛槐敏","ALLOCATE_PERSON_NAME":"薛槐敏","RECIPE_COSTS_AMOUNT":798,"VERIFY_PERSON_NAME":"薛槐敏","RECIPE_OPENDOCTOR_NAME":"薛槐敏","RECIPE_EFFECTIVE_DAY":10},{"RECIPE_TYPE_CODE":2,"RECIPE_OPEN_DATE":1457798400000,"PATIENT_ID":966,"DISPENSING_PERSON_NAME":"陈小红","ALLOCATE_PERSON_NAME":"陈小红","RECIPE_COSTS_AMOUNT":878,"VERIFY_PERSON_NAME":"陈小红","RECIPE_OPENDOCTOR_NAME":"陈小红","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":3,"RECIPE_OPEN_DATE":1457884800000,"PATIENT_ID":967,"DISPENSING_PERSON_NAME":"朱翼","ALLOCATE_PERSON_NAME":"朱翼","RECIPE_COSTS_AMOUNT":311,"VERIFY_PERSON_NAME":"朱翼","RECIPE_OPENDOCTOR_NAME":"朱翼","RECIPE_EFFECTIVE_DAY":40},{"RECIPE_TYPE_CODE":3,"RECIPE_OPEN_DATE":1458144000000,"PATIENT_ID":968,"DISPENSING_PERSON_NAME":"潘千","ALLOCATE_PERSON_NAME":"潘千","RECIPE_COSTS_AMOUNT":304,"VERIFY_PERSON_NAME":"潘千","RECIPE_OPENDOCTOR_NAME":"潘千","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":3,"RECIPE_OPEN_DATE":1458316800000,"PATIENT_ID":969,"DISPENSING_PERSON_NAME":"张恒","ALLOCATE_PERSON_NAME":"张恒","RECIPE_COSTS_AMOUNT":651,"VERIFY_PERSON_NAME":"张恒","RECIPE_OPENDOCTOR_NAME":"张恒","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":1,"RECIPE_OPEN_DATE":1458403200000,"PATIENT_ID":970,"DISPENSING_PERSON_NAME":"谢文婷","ALLOCATE_PERSON_NAME":"谢文婷","RECIPE_COSTS_AMOUNT":424,"VERIFY_PERSON_NAME":"谢文婷","RECIPE_OPENDOCTOR_NAME":"谢文婷","RECIPE_EFFECTIVE_DAY":40},{"RECIPE_TYPE_CODE":3,"RECIPE_OPEN_DATE":1458576000000,"PATIENT_ID":971,"DISPENSING_PERSON_NAME":"冯瑾娜","ALLOCATE_PERSON_NAME":"冯瑾娜","RECIPE_COSTS_AMOUNT":967,"VERIFY_PERSON_NAME":"冯瑾娜","RECIPE_OPENDOCTOR_NAME":"冯瑾娜","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":2,"RECIPE_OPEN_DATE":1458576000000,"PATIENT_ID":972,"DISPENSING_PERSON_NAME":"张英","ALLOCATE_PERSON_NAME":"张英","RECIPE_COSTS_AMOUNT":222,"VERIFY_PERSON_NAME":"张英","RECIPE_OPENDOCTOR_NAME":"张英","RECIPE_EFFECTIVE_DAY":30},{"RECIPE_TYPE_CODE":1,"RECIPE_OPEN_DATE":1459180800000,"PATIENT_ID":973,"DISPENSING_PERSON_NAME":"王琳","ALLOCATE_PERSON_NAME":"王琳","RECIPE_COSTS_AMOUNT":909,"VERIFY_PERSON_NAME":"王琳","RECIPE_OPENDOCTOR_NAME":"王琳","RECIPE_EFFECTIVE_DAY":30}];
	//住院记录
	var INP_24H_REC = [{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1455724800000,"BED_NO":"3681","DISHOSPITAL_DATETIME":1456502400000,"PATIENT_ID":954,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"368","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1455811200000,"BED_NO":"3713","DISHOSPITAL_DATETIME":1456416000000,"PATIENT_ID":955,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"475","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1456070400000,"BED_NO":"2298","DISHOSPITAL_DATETIME":1456588800000,"PATIENT_ID":956,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"620","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1456329600000,"BED_NO":"1024","DISHOSPITAL_DATETIME":1456934400000,"PATIENT_ID":957,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"255","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1456502400000,"BED_NO":"2217","DISHOSPITAL_DATETIME":1457193600000,"PATIENT_ID":958,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"875","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1456588800000,"BED_NO":"2857","DISHOSPITAL_DATETIME":1457366400000,"PATIENT_ID":959,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"970","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1456761600000,"BED_NO":"2654","DISHOSPITAL_DATETIME":1457539200000,"PATIENT_ID":960,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"317","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1456848000000,"BED_NO":"3098","DISHOSPITAL_DATETIME":1457452800000,"PATIENT_ID":961,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"987","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1457020800000,"BED_NO":"2387","DISHOSPITAL_DATETIME":1457625600000,"PATIENT_ID":962,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"936","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1457193600000,"BED_NO":"1717","DISHOSPITAL_DATETIME":1457798400000,"PATIENT_ID":963,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"630","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1457452800000,"BED_NO":"3523","DISHOSPITAL_DATETIME":1457971200000,"PATIENT_ID":964,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"307","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1457539200000,"BED_NO":"2360","DISHOSPITAL_DATETIME":1458489600000,"PATIENT_ID":965,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"272","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1457798400000,"BED_NO":"1160","DISHOSPITAL_DATETIME":1458748800000,"PATIENT_ID":966,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"588","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1457884800000,"BED_NO":"2531","DISHOSPITAL_DATETIME":1459094400000,"PATIENT_ID":967,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"905","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1458144000000,"BED_NO":"1976","DISHOSPITAL_DATETIME":1459353600000,"PATIENT_ID":968,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"630","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1458316800000,"BED_NO":"1687","DISHOSPITAL_DATETIME":1459440000000,"PATIENT_ID":969,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"946","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1458403200000,"BED_NO":"3969","DISHOSPITAL_DATETIME":1459699200000,"PATIENT_ID":970,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"635","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1458576000000,"BED_NO":"3604","DISHOSPITAL_DATETIME":1459785600000,"PATIENT_ID":971,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"452","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1458576000000,"BED_NO":"3266","DISHOSPITAL_DATETIME":1459699200000,"PATIENT_ID":972,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"417","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"},{"DISHOSPITAL_SITUATION":"治愈","INP_DATE":1459180800000,"BED_NO":"2843","DISHOSPITAL_DATETIME":1460217600000,"PATIENT_ID":973,"ALLERGY_HISTORY":"无","COMMUNICABLE_DISEASES_HISTORY":"无","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","ROOM_NO":"507","DEPT_NAME":"皮肤科","OPERATION_HISTORY":"无"}];
	//检查报告
	var INP_LAB_INFO = [{"ALLERGY_TYPE":2,"PATIENT_ID":954,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"高血脂","OPERATION_DATE":1455724800000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":2},{"ALLERGY_TYPE":2,"PATIENT_ID":955,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1455811200000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":1},{"ALLERGY_TYPE":3,"PATIENT_ID":956,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1456070400000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":1},{"ALLERGY_TYPE":3,"PATIENT_ID":957,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"高血脂","OPERATION_DATE":1456329600000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":1},{"ALLERGY_TYPE":2,"PATIENT_ID":958,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1456502400000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":2},{"ALLERGY_TYPE":3,"PATIENT_ID":959,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1456588800000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":2},{"ALLERGY_TYPE":1,"PATIENT_ID":960,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1456761600000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":2},{"ALLERGY_TYPE":1,"PATIENT_ID":961,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1456848000000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":1},{"ALLERGY_TYPE":3,"PATIENT_ID":962,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1457020800000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":2},{"ALLERGY_TYPE":1,"PATIENT_ID":963,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1457193600000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":1},{"ALLERGY_TYPE":2,"PATIENT_ID":964,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1457452800000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":2},{"ALLERGY_TYPE":3,"PATIENT_ID":965,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1457539200000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":1},{"ALLERGY_TYPE":1,"PATIENT_ID":966,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1457798400000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":1},{"ALLERGY_TYPE":3,"PATIENT_ID":967,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1457884800000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":1},{"ALLERGY_TYPE":1,"PATIENT_ID":968,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1458144000000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":2},{"ALLERGY_TYPE":3,"PATIENT_ID":969,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1458316800000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":1},{"ALLERGY_TYPE":3,"PATIENT_ID":970,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1458403200000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":2},{"ALLERGY_TYPE":3,"PATIENT_ID":971,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1458576000000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":2},{"ALLERGY_TYPE":1,"PATIENT_ID":972,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1458576000000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":1},{"ALLERGY_TYPE":3,"PATIENT_ID":973,"INTERFERE_NAME":"吡硫嗡锌","SYMPTOM_DESC":"寻常型斑块型","OPERATION_DATE":1459180800000,"ALLERGY_DRUG_NAME":"无","EXAM_RESULT":1}];
	
	$(function(){
		$("#serText").val("");
		$("#inputDate").val("");
		$(".search-btn").on("click",function(){
			var selCont = $.trim($(this).siblings("input").val());
			var selType = $("#sp").attr("selType");
			var depart = $("#depart").attr("selType");
			var data  = selData(parseInt(selType));
			
			var startTime = "";
			var endTime = "";
			
			var inputDate = $("#inputDate").val();
			var dataFlg = false;
			var sPlace = inputDate.indexOf("至");
			if( sPlace != -1){
				dataFlg = true;
				startTime = inputDate.substring(0,sPlace-1);
				endTime = inputDate.substring(sPlace+1);
			}
			
			var patientIds = [];
			$(data).each(function(id,item){
				if(selCont != ""){
					var jString = JSON.stringify(item);
					if(jString.indexOf(selCont) != -1)
					{
						patientIds.push(item.PATIENT_ID);
					}
				}else{
					patientIds.push(item.PATIENT_ID);
				}
				
			});

			var newData = [];
			if(depart == "0"){
				for(var i=0,length=patientIds.length;i<length;i++){
					var patientId = patientIds[i];
					$(tableData).each(function(id,item){
						if(item.patientId == patientId){
							if(dataFlg){
								var rTime = moment(item.rTime).format('YYYY-MM-DD'),
								cTime = moment(item.cTime).format('YYYY-MM-DD');
								if(stringToInt(endTime) < stringToInt(rTime) || stringToInt(startTime) > stringToInt(cTime)){
									return false;
								}else{
									newData.push(item);
								}
							}else{
								newData.push(item);
							}

						}
					});
				}
			}
			makeTable(newData);
		});
		
		makeTable(tableData);
	})
	
	function selData(id){
		var data = [];

		switch(id){
		case 1:
			data = INP_PAT_BASIC_INFO;
			break;
		case 2:
			data = INP_OUTP_MR;
			break;
		case 3:
			data = INP_OUTP_DIAG_INFO;
			break;
		case 4:
			data = INP_OUTP_ADVICE;
			break;
		case 5:
			data = INP_OUTP_RECIPE;
			break;
		case 6:
			data = INP_24H_REC;
			break;
		case 7:
			data = INP_LAB_INFO;
			break;
		default:
			data = INP_PAT_BASIC_INFO;
			break; 
			
		}
		return data;
	}
	function makeTable(data){
		var html = "";
		if(data != ""){
			$(data).each(function(id,item){
				html += "<tr>";
				html += "<td>"+item.name+"</td>";
				html += "<td>"+item.sex+"</td>";
				html += "<td>"+item.age+"</td>";
				html += "<td>"+moment(item.rTime).format('YYYY-MM-DD')+"</td>";
				html += "<td>"+moment(item.cTime).format('YYYY-MM-DD')+"</td>";
				html += "<td>"+item.quilty+"</td>";
				html += "<td class='t-r'><a class='op' href='../retrieve/EMPI.html?id="+item.patientId+"' title='查看详情'></a></td>";
				html += "</tr>";
			})
	
			$("#totalTbody").empty().html(html);
			$("#pager1").show();
			$("#totalTable").tablesorter({cssHeader: "", headers: {1: {sorter: false}, 0: {sorter: false},2:{sorter:false},3:{sorter:false},4:{sorter:false},5:{sorter:false},6:{sorter:false}}}).tablesorterPager({container: $("#pager1"), size: $("#pager1 .pagesize").val()});
		}else{
			html += "<tr><td colspan='7' style='text-align:center;'>暂无数据</td></tr>";
			$("#pager1").hide();
			$("#totalTbody").empty().html(html);
		}
	}
	
	function stringToInt(num){
		return parseInt(num.replace(/-/g,""));
	}
})(jQuery)