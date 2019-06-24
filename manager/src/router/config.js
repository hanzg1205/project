import dynamic from 'dva/dynamic';

// 引入路由
// 
const QuestionsAdd =  dynamic({
    component: () => import('@/views/Meun/questionsManagement/questionsAdd/questionsAdd'),
});
const QuestionsType =  dynamic({
    component: () => import('@/views/Meun/questionsManagement/QuestionsType/QuestionsType'),
});
const QuestionsSee =  dynamic({
    component: () => import('@/views/Meun/questionsManagement/QuestionsSee/QuestionsSee'),
});
const QuestionsEdit =  dynamic({
    component: () => import('@/views/Meun/questionsManagement/questionsEdit/questionsEdit'),
});
const QuestionDetail =  dynamic({
    component: () => import('@/views/Meun/questionsManagement/questionDetail/questionDetail'),
});
// 用户管理
const UserAdd =  dynamic({
    component: () => import('@/views/Meun/userManagement/userAdd'),
});
const UserSee =  dynamic({
    component: () => import('@/views/Meun/userManagement/userSee'),
});
// 考试管理
const ExamAdd =  dynamic({
    component: () => import('@/views/Meun/examManagement/examAdd'),
});
const ExamList =  dynamic({
    component: () => import('@/views/Meun/examManagement/examList'),
});
const ExamEdit =  dynamic({
    component: () => import('@/views/Meun/examManagement/examEdit'),
});
// 班级管理
const ClassManagement =  dynamic({
    component: () => import('@/views/Meun/classManagement/classManagement/classManagement'),
});
const ClassRoom =  dynamic({
    component: () => import('@/views/Meun/classManagement/classRoom/classromm'),
});
const ClassStudent =  dynamic({
    component: () => import('@/views/Meun/classManagement/classStudent/classStudent'),
});
// 批卷管理
const MarkingManagement =  dynamic({
    component: () => import('@/views/Meun/markingManagement/markingManagement/markingManagement'),
});
const MarkingMark =  dynamic({
    component: () => import('@/views/Meun/markingManagement/markingMarking/makingMarking'),
});

export default {
    routes: [{ // 试题管理
        name: 'router.questions',
        children: [{
            name: 'router.questions.add',
            id: 'main-addQuestions',
            path: '/questions/add',
            component: QuestionsAdd
        },{
            name: 'router.questions.List',
            id: 'main-watchQuestions',
            path: '/questions/See',
            component: QuestionsSee
        },{
            name: 'router.qusetions.Type',
            id: 'main-questionsType',
            path: '/questions/type',
            component: QuestionsType
        },
        // {
        //     name: 'router.questions.edit',
        //     id: 'main-editQuestions',
        //     path: '/questions/edit/:id',
        //     component: QuestionsEdit
        // },{
        //     name: 'router.questions.detail',
        //     id: 'main-questionsDetail',
        //     path: '/questions/detail/:id',
        //     component: QuestionDetail
        // }
    ]
    },{  // 用户管理
        name: 'router.users',
        children: [{
            name: 'router.user.userAdd',
            id: 'main-addUser',
            path: '/user/add',
            component: UserAdd
        },{
            name: 'router.user.display',
            id: 'main-showUser',
            path: '/user/see',
            component: UserSee
        }]
    },{ // 考试管理
        name: 'router.exam',
        children: [{
            name: 'router.exam.ExamAdd',
            id: 'main-addExam',
            path: '/exam/add',
            component: ExamAdd
        },{
            name: 'router.exam.ExamList',
            id: 'main-examList',
            path: '/exam/list',
            component: ExamList
        },
        // {
        //     name: 'router.exam.ExamCreate',
        //     id: 'main-examEdit',
        //     path: '/exam/edit',
        //     component: ExamEdit
        // }
    ]
    },{ // 班级管理
        name: 'router.class',
        children: [{
            name: 'router.class.Class',
            id: 'main-grade',
            path: '/class/management',
            component: ClassManagement
        },{
            name: 'router.class.classRoom',
            id: 'main-room',
            path: '/class/classroom',
            component: ClassRoom
        },{
            name: 'router.class.Stundent',
            id: 'main-student',
            path: '/class/student',
            component: ClassStudent
        }]
    },{ // 批卷管理
        name: 'router.marking.Marking',
        children: [{
            name: 'router.marking.MarkingClass',
            id: 'main-examPaperClassList',
            path: '/class/special',
            component: MarkingManagement
        },
        // {
        //     name: 'router.marking.MarkingExam',
        //     id: 'main-examPaperClassmate',
        //     path: '/class/marking/:grade_id',
        //     component: MarkingMark
        // }
        ]
    }]
}