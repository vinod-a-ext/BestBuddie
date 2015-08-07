var app = angular.module('AVatar', ['ui.bootstrap']);
app.controller('Avatarctrl', ['$scope', '$http', '$timeout', '$interval', function(scope, $http, timeout, $interval) {
    scope.a = 0;
    scope.Answers = [{
            Name: "Anushuka",
            id: "1"
        }, {
            Name: "Tammanah",
            id: "1"
        }, {
            Name: "Prabhas",
            id: "1"
        }, {
            Name: "RamyaKrishna",
            id: "1"
        }


    ]
    scope.resultsarray = []
    scope.fullset = {
        'Happyset': [{
            question: "Your Best Character in Baahuballi",
            options: [{
                "Name": "Anushuka",
                "id": "1",
                "height": "10"
            }, {
                "Name": "Tammanah",
                "id": "2",
                "height": "30"
            }, {
                "Name": "RamyaKrishna",
                "id": "3",
                "height": "50"
            }, {
                "Name": "Prabhas Mother",
                "id": "4",
                "height": "20"
            }]
        }, {
            question: "Your Best Comic Role",
            options: [{
                "Name": "Donal Duck",
                "id": "1",
                "height": "20"
            }, {
                "Name": "Tom",
                "id": "2",
                "height": "20"
            }, {
                "Name": "Jerry",
                "id": "3",
                "height": "15"
            }, {
                "Name": "Aladdin",
                "id": "4",
                "height": "20"
            }]
        }, {
            question: "Your Best Cricketer",
            options: [{
                "Name": "Sachin",
                "id": "1",
                "height": "30"
            }, {
                "Name": "Lara",
                "id": "2",
                "height": "15"
            }, {
                "Name": "Ponting",
                "id": "3",
                "height": "15"
            }, {
                "Name": "Dravid",
                "id": "4",
                "height": "20"
            }]
        }, {
            question: "Your Best WWf Fighter",
            options: [{
                "Name": "Rock",
                "id": "1",
                "height": "30"
            }, {
                "Name": "John Cena",
                "id": "2",
                "height": "15"
            }, {
                "Name": "Under Taker",
                "id": "3",
                "height": "10"
            }, {
                "Name": "Batista",
                "id": "4",
                "height": "20"
            }]
        }],

        'Sadset': [{
            question: "Your Best Sad Film",
            options: [{
                "Name": "Komaram Puli ",
                "id": "1",
                "height": "50"
            }, {
                "Name": "Bangaram",
                "id": "2",
                "height": "30"
            }, {
                "Name": "Balu",
                "id": "3",
                "height": "20"
            }, {
                "Name": "Hrudhya Kalayam",
                "id": "4",
                "height": "10"
            }]
        }, {
            question: "Your Best Sad Heroine",
            options: [{
                "Name": "Anjali",
                "id": "1",
                "height": "15"
            }, {
                "Name": "Shirya",
                "id": "2",
                "height": "20"
            }, {
                "Name": "Simran",
                "id": "3",
                "height": "20"
            }, {
                "Name": "Kajal",
                "id": "4",
                "height": "30"
            }]
        }, {
            question: "Your Best Test Player",
            options: [{
                "Name": "Dravid",
                "id": "1",
                "height": "15"
            }, {
                "Name": "Kaif",
                "id": "2",
                "height": "25"
            }, {
                "Name": "Lara",
                "id": "3",
                "height": "30"
            }, {
                "Name": "Sachin",
                "id": "4",
                "height": "30"
            }]
        }, {
            question: "Your Best Sad Phone",
            options: [{
                "Name": "MOtorola",
                "id": "1",
                "height": "20"
            }, {
                "Name": "Microsoft",
                "id": "2",
                "height": "25"
            }, {
                "Name": "Micromax",
                "id": "3",
                "height": "30"
            }, {
                "Name": "Lg",
                "id": "4",
                "height": "30"
            }]
        }],

        'Loveset': [{
                question: "Your Best Love Film",
                options: [{
                    "Name": "Ok Bangaram",
                    "id": "1",
                    "height": "50"
                }, {
                    "Name": "Sakhi",
                    "id": "2",
                    "height": "30"
                }, {
                    "Name": "Geethanjali",
                    "id": "3",
                    "height": "20"
                }, {
                    "Name": "Bombay",
                    "id": "4",
                    "height": "30"
                }]
            }, {
                question: "Your Best Love Song",
                options: [{
                    "Name": "Vennala Vennala ei..(Meirupu Kalallu)",
                    "id": "1",
                    "height": "10"
                }, {
                    "Name": "Kannuladha(3 movie)",
                    "id": "2",
                    "height": "20"
                }, {
                    "Name": "Urikei chilaka(Bombay)",
                    "id": "3",
                    "height": "20"
                }, {
                    "Name": "Ne Dhookudu(Dhookudu)",
                    "id": "4",
                    "height": "10"
                }]
            }, {
                question: "Your Best One Day Cricketer",
                options: [{
                    "Name": "Dhoni",
                    "id": "1",
                    "height": "15"
                }, {
                    "Name": "Yuvraj",
                    "id": "2",
                    "height": "25"
                }, {
                    "Name": "Gilicrist",
                    "id": "3",
                    "height": "30"
                }, {
                    "Name": "Sachin",
                    "id": "4",
                    "height": "30"
                }]
            }, {
                question: "Your Best Love Symbol",
                options: [{
                    "Name": "Taj mahal",
                    "id": "1",
                    "height": "20"
                }, {
                    "Name": "Chariminar",
                    "id": "2",
                    "height": "25"
                }, {
                    "Name": "Greeting",
                    "id": "3",
                    "height": "30"
                }, {
                    "Name": "Love SYmbol",
                    "id": "4",
                    "height": "30"
                }]
            }

        ],
        'Normalset': [{
                question: "Your Best Tiffen",
                options: [{
                    "Name": "Idly",
                    "id": "1",
                    "height": "20"
                }, {
                    "Name": "Dosa",
                    "id": "2",
                    "height": "30"
                }, {
                    "Name": "Anything",
                    "id": "3",
                    "height": "20"
                }, {
                    "Name": "NOthing",
                    "id": "4",
                    "height": "10"
                }]
            }, {
                question: "Your Best Dress Color",
                options: [{
                    "Name": "White",
                    "id": "1",
                    "height": "30"
                }, {
                    "Name": "Red",
                    "id": "2",
                    "height": "20"
                }, {
                    "Name": "Black",
                    "id": "3",
                    "height": "30"
                }, {
                    "Name": "Any Color",
                    "id": "4",
                    "height": "40"
                }]
            }, {
                question: "Your Best Quote Topic",
                options: [{
                    "Name": "Love Quotes",
                    "id": "1",
                    "height": "30"
                }, {
                    "Name": "Friendship Quotes",
                    "id": "2",
                    "height": "20"
                }, {
                    "Name": "Challange",
                    "id": "3",
                    "height": "30"
                }, {
                    "Name": "Reletions",
                    "id": "4",
                    "height": "30"
                }]
            }, {
                question: "Your Best Phone",
                options: [{
                    "Name": "Iphone",
                    "id": "1",
                    "height": "20"
                }, {
                    "Name": "Samsung",
                    "id": "2",
                    "height": "30"
                }, {
                    "Name": "Sony",
                    "id": "3",
                    "height": "20"
                }, {
                    "Name": "Microsoft",
                    "id": "4",
                    "height": "20"
                }]
            }

        ],
        'FunnySet': [{
                question: "Your Best Comedy Movie",
                options: [{
                    "Name": "Racha",
                    "id": "1",
                    "height": "30"
                }, {
                    "Name": "Ladies Tailor",
                    "id": "2",
                    "height": "20"
                }, {
                    "Name": "Eega",
                    "id": "3",
                    "height": "30"
                }, {
                    "Name": "Hello Brother",
                    "id": "4",
                    "height": "10"
                }]
            }, {
                question: "Your Best Comic Role",
                options: [{
                    "Name": "Donal Duck",
                    "id": "1",
                    "height": "20"
                }, {
                    "Name": "Tom",
                    "id": "2",
                    "height": "30"
                }, {
                    "Name": "Jerry",
                    "id": "3",
                    "height": "20"
                }, {
                    "Name": "Aladdin",
                    "id": "4",
                    "height": "40"
                }]
            }, {
                question: "Your Best T20 Cricketer ",
                options: [{
                    "Name": "Kohli",
                    "id": "1",
                    "height": "30"
                }, {
                    "Name": "ABD",
                    "id": "2",
                    "height": "20"
                }, {
                    "Name": "Maxwell",
                    "id": "3",
                    "height": "30"
                }, {
                    "Name": "Sachin",
                    "id": "4",
                    "height": "10"
                }]
            }, {
                question: "Your Best Villan",
                options: [{
                    "Name": "Rana",
                    "id": "1",
                    "height": "20"
                }, {
                    "Name": "RamyaKrishnaa",
                    "id": "2",
                    "height": "30"
                }, {
                    "Name": "Kota Srinivasu Rao",
                    "id": "3",
                    "height": "20"
                }, {
                    "Name": "Prakash Raj",
                    "id": "4",
                    "height": "40"
                }]
            }

        ]
    }
    scope.imagearray = [{
        imagename: "images/tarzan.png",
        text: "Find the Out Reason Y ur N't a Man"
    }, {
        imagename: "images/dicapro.jpg",
        text: "Love it Express it , Expression is mandatory"
    }, {
        imagename: "images/friends.png",
        text: "Even God Has friends,Y Not  You? "
    }, {
        imagename: "images/hand.jpg",
        text: "We can't Give a Avatar To You Your Expressions are Too Tough"
    }, {
        imagename: "images/king-kong.png",
        text: "Enjoy him in Theaters only"
    }, {
        imagename: "images/love.jpg",
        text: "I think You Must Love Guru"
    }, {
        imagename: "images/photographers.png",
        text: "Click It and Save IT,Memories are Too hard to Forget"
    }, {
        imagename: "images/pig.jpg",
        text: "Think Before u Eat Like Bad Stuff"
    }, {
        imagename: "images/racer.jpg",
        text: "Queue Time is Over,u Have to Beat it Now "
    }, {
        imagename: "images/rajini.jpg",
        text: "Style it has a Differnt Meaning when it comes to You"
    }]

    scope.scan = true;
    scope.Questionset = scope.fullset.Happyset;
    $('#chartID').removeClass('chartsmallheight');
    $('#chartID').removeClass('chartbigheight');
    $('#chartID').removeClass('chartsmallwidth');
    $('#chartID').removeClass('chartbigwidth');


    scope.moodset = [{
        moodnames: "Haapy",
        id: "1",
        color: "#96CB20",
        setname: "Happyset",
        icon: "glyphicon glyphicon-cloud"
    }, {
        moodnames: "Sad",
        id: "2",
        color: "#2420CB",
        setname: "Sadset",
        icon: "glyphicon glyphicon-music"
    }, {
        moodnames: "Love",
        id: "3",
        color: "#9D20CB",
        setname: "Loveset",
        icon: "glyphicon glyphicon-heart"
    }, {
        moodnames: "Normal",
        id: "4",
        color: "#3A4442",
        setname: "Normalset",
        icon: "glyphicon glyphicon-screenshot"
    }, {
        moodnames: "Funny",
        id: "5",
        color: "#64E6CC",
        setname: "FunnySet",
        icon: "glyphicon glyphicon-leaf"
    }]
    scope.fff = "";
    scope.scan = false;
    scope.anwserclick = function(data, options, parentindex, index) {
        scope.a = (parentindex < scope.Questionset.length - 1) ? (scope.a + 1) : -1;
        var height = data.height;
        scope.height = scope.height == undefined ? parseInt(data.height) : (scope.height + parseInt(data.height));
        var anwservalue = index + 1;
        scope.anwsers = scope.anwsers == undefined ? anwservalue : scope.anwsers + anwservalue;
        if (scope.a == -1) {
            var output;
            if (scope.anwsers > 9) {
                while (scope.anwsers) {
                    output = output == undefined ? (scope.anwsers % 10) : output + (scope.anwsers % 10);
                    scope.anwsers = Math.floor(scope.anwsers / 10);
                }
                scope.anwsers = output;
            }
            scope.imageurl = scope.imagearray[scope.anwsers - 1].imagename;
            scope.Alert = scope.imagearray[scope.anwsers - 1].text;
            scope.scan = true;
            $('#scanmodel').modal('show');
            timeout(function() {
                scope.scan = false;
                $('#scanmodel').modal('hide');
            }, 6000);
            if (screen.width > 700) {
                console.log(screen.width);
                calltimer();
            } else {
                console.log(screen.width);
                calltimerwdith();
            }
        }

        angular.forEach(options, function(row) {
            row.isselected = false;
        });
        data.isselected = true;
    }

    function calltimer() {
        $interval(function() {
            if (scope.scan == true) {
                if ($('#chartID').attr('class').search('chartbigheight') == -1) {
                    console.log('If Case');
                    $('#chartID').removeClass('chartsmallheight');
                    $('#chartID').removeClass('chartbigheight');
                    $('#chartID').addClass('chartbigheight');
                } else if ($('#chartID').attr('class').search('chartsmallheight') == -1) {
                    console.log('else case');
                    $('#chartID').removeClass('chartsmallheight');
                    $('#chartID').removeClass('chartbigheight');
                    $('#chartID').addClass('chartsmallheight');
                } else {
                    $('#chartID').addClass('chartbigheight');
                }
            }
        }, 1000);
    }

    function calltimerwdith() {
        $interval(function() {
            if (scope.scan == true) {
                if ($('#chartID').attr('class').search('chartbigwidth') == -1) {
                    console.log('If Case');
                    $('#chartID').removeClass('chartsmallwidth');
                    $('#chartID').removeClass('chartbigwidth');
                    $('#chartID').addClass('chartbigwidth');
                } else if ($('#chartID').attr('class').search('chartsmallwidth') == -1) {
                    console.log('else case');
                    $('#chartID').removeClass('chartsmallwidth');
                    $('#chartID').removeClass('chartbigwidth');
                    $('#chartID').addClass('chartsmallwidth');
                } else {
                    $('#chartID').addClass('chartbigwidth');
                }
            }
        }, 1000);
    }


    scope.abc = function(data) {

        return data.isselected == true ? 'mouseclass1' : '';

    }
    $(document).ready(function() {
        $('#firstmodal').modal('show');

    });
    $(document).ready(function() {
        $('#firstmodal').bind('hidden', function() {
            $('#myModal').modal('show');
        });
    });
    scope.showgamemodal = function() {
        $('#firstmodal').modal('hide');
        $('#myModal').modal('show');
    }
    scope.redirect = function() {
        scope.Questionset.forEach(function(row) {
            row.options.forEach(function(data) {
                data.isselected = false;
            });
            scope.a = 0;
            scope.height = undefined;
            $('#myModal').modal('show');
            $('#chartID').removeClass('chartsmallheight');
            $('#chartID').removeClass('chartbigheight');
            $('#chartID').removeClass('chartsmallwidth');
            $('#chartID').removeClass('chartbigwidth');
        })
    }
    scope.modalmouseclick = function(moods) {
        scope.Questionset = scope.fullset[moods.setname];
        scope.parentname = moods.setname;
        $('#myModal').modal('hide');
    }
    scope.modelmouseentyer = function(moods) {
        moods.color1 = 'mouseclass';
        //scope.bgcolor={'border': '10px solid '+moods.color}
    }
    scope.modalmouseleave = function(moods) {

        moods.color1 = '';
        scope.bgcolor = {}
    }
    scope.getheight = function(id) {
        if (scope.scan == false) {
            if (screen.width > 700) {
                return (id === scope.parentname) ? {
                    'height': scope.height + '%',
                    'transition': 'height 2s'
                } : {
                    'height': '25%',
                    'transition': 'height 2s'
                };
            } else {
                return (id === scope.parentname) ? {
                    'width': scope.height + '%',
                    'transition': 'width 2s'
                } : {
                    'width': '25%',
                    'transition': 'width 2s'
                };
            }
        }
    }
    scope.aaa = function(id, name) {
        if (scope.scan == false) {
            return (name === scope.parentname) ? scope.height + '' : '25';
        } else {
            var height = $(id).height();
            var parentHeight = $(id).offsetParent().height();
            var percent = Math.ceil(100 * height / parentHeight);
            return percent;
        }
    }

}]);
