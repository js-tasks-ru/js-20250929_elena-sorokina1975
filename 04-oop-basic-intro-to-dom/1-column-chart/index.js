export default class ColumnChart {
    chartHeight = 50;

    constructor( chartProps = {}) {

    const {
      data = [],
      value = 0,
      label = "",
      link = "",
      formatHeading = (value) => value,
    } = chartProps;

    this.data = data;
    this.value = value;
    this.label = label;
    this.link = link;
    this.formatHeading = formatHeading;
    this.element = this.createElement();
  }
  createElement() {
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="column-chart" style="--chart-height: ${this.chartHeight}}">
        <div class="column-chart__title">
          Total ${this.label}
          ${this.link &&`<a href=${this.link} class="column-chart__link">View all</a>`}
        </div>
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">${this.formatHeading(this.value)}</div>
          <div data-element="body" class="column-chart__chart">
          ${this.renderChart()}
          </div>
        </div>
      </div>
    `;
    const firstElementChild = element.firstElementChild;
    if (!this.data.length) {
      firstElementChild.classList.add("column-chart_loading");
    }
    return firstElementChild;
  }

    renderChart() {
    return this.data
      .map((num, _, data) => {
        const value = Math.floor(num * (this.chartHeight / Math.max(...data)));
        const percent = ((num / Math.max(...data)) * 100).toFixed(0);
        return `<div style="--value: ${value}" data-tooltip="${percent}%"></div>`;
      })
      .join("");
  }

  update(newData) {
    this.data = newData;
    this.element.replaceWith(this.createElement());
  }  

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }  
}


