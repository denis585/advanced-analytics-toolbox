define([
  '../../vendor/plotly.min',
  '../util/utils'
], (Plotly, utils) => {
  return {
    /**
     * draw - draw chart
     *
     * @param {Object} $scope        angular $scope
     * @param {Object} data          Data for chart
     * @param {String} elementId     HTML element id to embed chart
     * @param {Object} customOptions Custom chart options
     *
     * @return {Object} Chart object
     */
    draw($scope, app, data, elementId, customOptions) {
      const options = {
        showlegend: $scope.layout.props.showLegend,
        scene: {
          xaxis: {
            title: $scope.layout.props.xLabelsAndTitle ? $scope.layout.props.measures[0].label : 'x',
            tickformat: utils.getTickFormat($scope, 0),
            tickprefix: utils.getPrefix($scope, 0),
            ticksuffix: utils.getSuffix($scope, 0),
          },
          yaxis: {
            title: $scope.layout.props.yLabelsAndTitle ? $scope.layout.props.measures[1].label : 'y',
            tickformat: utils.getTickFormat($scope, 1),
            tickprefix: utils.getPrefix($scope, 1),
            ticksuffix: utils.getSuffix($scope, 1),
          },
          zaxis: {
            title: $scope.layout.props.yLabelsAndTitle ? $scope.layout.props.measures[2].label : 'z',
            tickformat: utils.getTickFormat($scope, 2),
            tickprefix: utils.getPrefix($scope, 2),
            ticksuffix: utils.getSuffix($scope, 2),
          },
        },
        separators: utils.getSeparators($scope, 0),
        dragmode: 'select',
        margin: { r: 10, t: 0 }
      };

      $.extend(options, customOptions);

      const config = {
        scrollZoom: true,
        showLink: false,
        displaylogo: false,
        modeBarButtonsToRemove: ['sendDataToCloud'],
      };

      const chart = document.getElementById(elementId);
      Plotly.plot(chart, data, options, config);

      return chart;
    },
  };
});
