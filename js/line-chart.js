export { lineChart };

 let test = document.getElementById('lineChart').getContext('2d');

 // Global Options
 Chart.defaults.global.defaultFontFamily = 'Lato';
 Chart.defaults.global.defaultFontsize = 18;
 Chart.defaults.global.defaultFontColor = '#777';


 let lineChart = new Chart(test, {
   type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data:{
     labels:['San Juan', 'Bayamón', 'Carolina', 'Ponce', 'Caguas', 'Guaynabo', 'Mayaguez', 'Trujillo Alto', 'Arecibo', 'Fajardo'],
     datasets:[{
       label:'Population',
       data:[
         418140,
         203499,
         170404,
         152634,
         86804,
         81360,
         78647,
         54189,
         49318,
         34068
       ],

       // backgroundColor: 'green',
       backgroundColor:[
         '#e65100',
         '#e65100',
         '#f57c00',
         '#fb8c00',
         '#ff9800',
         '#ffa726',
         '#ffb74d',
         '#ffcc80',
         '#ffe0b2',
         '#fff3e0'
       ],
       borderWidth:1,
       borderColor:'white',
       hoverBorderWidth: 3,
       hoverBorderColor: 'grey'
     }]
   },
   options:{
     title:{
       display: true,
       text: 'Test Line Chart',
       fontSize:25
     },
     legend:{
       display:true,
       position:'right',
       labels:{
         fontColor: '#000'
       }
     },
     layout:{
       padding:{
         left:50,
         right:0,
         bottom:0,
         top:0
       }
     },
     tooltips:{
       enabled:true
     }
   }
 });