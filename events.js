function showEvents() {
  let oArgs = {
    app_key: 'nKZpJ44prswfb3Q8',
    where: 'Miami',
    page_size: 15,
    sort_order: 'popularity'
  };
  EVDB.API.call('/events/search', oArgs, function(oData) {
    let events = oData.events.event;
    console.log(events);
    const divEl = document.querySelector('.events-api');
    for (let ev of events) {
      const div = document.createElement('div');
      div.className = 'col-md-4 d-flex';
      div.style.marginBottom="1em";
      div.innerHTML = `
    <div class="card d-flex align-items-stretch">
      <a href="${ev.url}"><img src="${
        ev.image ? ev.image.medium.url : ''
      }" class="card-img-top rounded"></a>
      <div class="card-body">
      <h3 class="card-title"><a href="${ev.url}">${ev.title}</a></h3>
      <h5 class="text-center">${ev.start_time.substring(0, 10)}</h5>
      <h6 class="text-center">${ev.start_time.substring(11, 16)}</h6>
      </div>
    </div>
    `;
      divEl.appendChild(div);
    }
    document.querySelector('.loading').style.display = 'none';
  });
}
window.addEventListener('DOMContentLoaded', showEvents());
