export { targetLineChart };

var targetLineChart = c3.generate({
    bindto: '#targetLineChart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ],
    //   axes: {
    //     data1: 'y',
    //   },
    //   onmouseover: function (d) { console.log(d); }

    },
    grid: {
        // focus:{
        //     show:false
        // },
        x: {
            // label: 'X axis',
            lines: [
                {value: 5, text: 'Label', class: 'color-grid'}
            ]
        },
        y: {
            inner: true,
            // label: 'Y axis',
            // show: true
            // front: true
        }
      }
});