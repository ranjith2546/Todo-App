
const express = require('express');
const router = express.Router();

var TodoNotes = [
    {
        Id: 0,
        Test: 'Test1'
    },
    {
        Id: 2,
        Test: 'Test2'
    }
];
var TodoID = 5;


router.get('/',(req,res) => {
     res.render('index',{TodoNotes: TodoNotes});
});

router.post('/add', (req,res) => {
    let makenote={
        Id: GetId(),
        Text: req.body.userinput
    };

    TodoNotes.push(makenote);

    res.redirect('/');

});

router.get('/delete', (req,res) => {
    let id = req.query.id; 
    //let resultindex;
    for (var i=0; i < TodoNotes.length; i++ ){
        if ( TodoNotes[i].Id == id ){
            break;
        }
    }
    console.log('bbb'+TodoNotes.length);
  TodoNotes.splice(i,1);

    console.log('aaa'+TodoNotes.length);

    res.redirect('/');
    /* 
    TodoNotes.map((data,index) => { 
        if ( data.Id === id ) {
            resultindex= index;
        }
    }); */
   // res.send(resultindex);
})


function GetId() {
    return TodoID += 1;
}

module.exports = router;



