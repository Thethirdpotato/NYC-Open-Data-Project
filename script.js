// HOME PAGE
let data, output, result, subdata;

function init(){
  $.ajaxSetup({async: false});
  data = $.getJSON("data.js").responseJSON;
  
  averageSAT();
  cards(data);
}

function averageSAT(){
  let m = 0, bx=0, q=0, bk=0, st=0, other=0;

  // K = bk, R = st, X = bx, M = m, Q = q
  
  for (let i=0;i<data.length;i++){
    let boro = data[i].dbn;
    boro = boro.substring(2,3);
    
    if (data[i].num_of_sat_test_takers == "s"){
      other++;
    } else {
      if (boro == "K"){
        bk+= parseInt(data[i].num_of_sat_test_takers);
      } else if (boro == "R"){
        st+= parseInt(data[i].num_of_sat_test_takers);
      } else if (boro == "X"){
        bx+= parseInt(data[i].num_of_sat_test_takers);
      } else if (boro == "M"){
        m+= parseInt(data[i].num_of_sat_test_takers);
      } else if (boro == "Q"){
        q+= parseInt(data[i].num_of_sat_test_takers);  
      }
    }
  }

  let chartData =[
    ["QUEENS", q],
    ["MANHATTAN", m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", st],
    ["NULL", other]
  ]

  displayChart(chartData,"chartOutput","bar")
}


// INFO PAGE - school
function getSchool(){
  let school = get("school").value;
  subdata = filter(data, "school_name", school);
  console.log(subdata[0]);
  get("flipcard_output").innerHTML = ``;
  cards(subdata);
}

// DATA PAGE



function byBoro(){
  let m = 0, bx=0, q=0, bk=0, st=0, other=0;
  // Scores per borough
  let mS = 0, bxS = 0, qS = 0, bkS = 0, stS = 0;
  
  
  for (let i=0;i<data.length;i++){
    let boro = data[i].dbn;
    boro = boro.substring(2,3);

    let avgScore = parseInt(data[i].sat_critical_reading_avg_score) + parseInt(data[i].sat_math_avg_score) + parseInt(data[i].sat_writing_avg_score);

    if (data[i].num_of_sat_test_takers == "s"){
      other++;
    } else {
      if (boro == "K"){
        bk++;
        bkS += avgScore;

      } else if (boro == "R"){
        st++;
        stS+=avgScore;
      } else if (boro == "X"){
        bx++;
        bxS += avgScore;
      } else if (boro == "M"){
        m++
        mS += avgScore;
      } else if (boro == "Q"){
        q++;
        qS += avgScore;
      }
      
      
    }

  }
  
  let chartData =[
    ["QUEENS", qS/q],
    ["MANHATTAN", mS/m],
    ["BROOKLYN", bkS/bk],
    ["BRONX", bxS/bx],
    ["STATEN ISLAND", stS/st],
    ["NULL", other]
  ]

  let chartType = get("chartType").value;
  
  displayChart(chartData, "chartOutput2", chartType);
  
  
}

function takers(){
  let m = 0, bx=0, q=0, bk=0, st=0, other=0;

  // K = bk, R = st, X = bx, M = m, Q = q

  for (let i=0;i<data.length;i++){
    let boro = data[i].dbn;
    boro = boro.substring(2,3);

    if (data[i].num_of_sat_test_takers == "s"){
      other++;
    } else {
      if (boro == "K"){
        bk+= parseInt(data[i].num_of_sat_test_takers);
      } else if (boro == "R"){
        st+= parseInt(data[i].num_of_sat_test_takers);
      } else if (boro == "X"){
        bx+= parseInt(data[i].num_of_sat_test_takers);
      } else if (boro == "M"){
        m+= parseInt(data[i].num_of_sat_test_takers);
      } else if (boro == "Q"){
        q+= parseInt(data[i].num_of_sat_test_takers);  
      }
    }
  }

  let chartData =[
    ["QUEENS", q],
    ["MANHATTAN", m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", st],
    ["NULL", other]
  ]

  let chartType = get("chartType").value;

  displayChart(chartData, "chartOutput2", chartType);
}

