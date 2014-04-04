Ext.define('Seven.store.Habits', {
    extend : 'Ext.data.Store',

    xtype: "habits",

    requires:[
        'Seven.model.Habit'
    ],

    config:{
        model: 'Seven.model.Habit',
        sorters: 'id',

        data : [
                {"id": 1, "name" : "Be Proactive",
                    "desc": "As human beings, we are responsible for our own lives. We have the independent will to make our own choices and decisions, and the responsibility (the ability to respond) to make the right choices. You have the freedom to choose your own fate and path, so having the independent will, imagination and self-awareness to make the right move makes you a proactive, and not a reactive, person."
                },
                {"id": 2, "name" : "Begin With The End In Mind",
                    "desc": "Mental visualization is extremely important. Covey says that all things are created twice: first, the mental conceptualization and visualization and a second physical, actual creation. Becoming your own creator means to plan and visualize what you're going to do and what you're setting out to accomplish and then go out and creating it. Identifying your personal statement and your principles will help."
                },
                {"id": 3, "name" : "Put First Things First",
                    "desc": "With your power of independent will, you can create the ending you want to have. Part of that comes with effective time management, starting with matters of importance. Then tasks should be completed based on urgency after you deal with all the important matters. If you deal with crises, pressing problems and deadline-driven projects first, your life will be a lot easier."
                },
                {"id": 4, "name" : "Think Win/Win",
                    "desc": "If you believe in a better way to accomplish goals that's mutually beneficial to all sides, that's a win/win situation. 'All parties feel good about the decision and feel committed to the action plan, 'Covey wrote.' One person's success is not achieved at the expense or exclusion of the success of others.' If you have integrity and maturity, there's no reason win/win situations can't happen all the time."
                },
                {"id": 5, "name" : "Seek First To Understand, Then To Be Understood",
                    "desc": "If you're a good listener and you take the time to understand a concept, it will help you convey your opinions, plans and goals to others. It starts with communication and strong listening skills, followed by diagnosing the situation and then communicating your solution to others."
                },
                {"id": 6, "name" : "Synergize",
                    "desc": "Synergistic communication, according to Covey, is (opening your mind and heart to new possibilities, new alternatives, new options.) This applies to the classroom, the business world and wherever you could apply openness and communication. It's all about building cooperation and trust."
                },
                {"id": 7, "name" : "Sharpen The Saw",
                    "desc": "Sometimes you're working so hard on the other six habits that you forget about re-energizing and renewing yourself to sharpen yourself for the tasks in front of you. Some sharpening techniques include exercise and nutrition, reading, planning and writing, service and empathy and commitment, study and meditation."
                }
        ]


//        autoLoad : true

    }
});
