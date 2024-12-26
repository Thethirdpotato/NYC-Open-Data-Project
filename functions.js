
function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}

function get(id){
  return document.getElementById(id);
}


function cards(tests){
  let build = ""
  for(let i=0;i<tests.length;i++){
    let test = tests[i];
    let front = `<div class="fitted card">
                  <h3>${test.school_name}</h3>
                  <p>${test.dbn}</p>
                </div>`;
    let back = `<div class="fitted card">
                  <h3>${test.school_name}</h3>
                  <p>Critical Reading Avg: ${test.sat_critical_reading_avg_score}</p>
                  <p>Math Avg: ${test.sat_math_avg_score}</p>
                  <p>Writing Avg: ${test.sat_writing_avg_score}</p>
                </div>`
    let flipcard = new FlipCard(front, back)
    flipcard.render("flipcard_output")
  }
  return build
}

function filter( tests, key , value ){
  let list = [];
  for(let i = 0; i < tests.length; i++){
    let complaints = tests[i];
    if(complaints[key] == value){
      list.push(tests[i]);
    }
  }
  return list;
}