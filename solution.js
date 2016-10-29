/*
Solution to CeleraOne's javascript sorting problem.
By Philip Richard Kirkbride
On October 17, 2016
*/

// Define the two sample datasets
var jsonData1 = [ { "company_name":"Medline Industries, Inc.", "product":"Benzalkonium Chloride", "price":"481.63" }, { "company_name":"PD-Rx Pharmaceuticals, Inc.", "product":"Alprazolam", "price":"167.62", "fda_date_approved":"02/12/2015" }, { "company_name":"West-ward Pharmaceutical Corp.", "product":"Flumazenil", "fda_date_approved":"23/04/2015" }, { "company_name":"HyVee Inc", "product":"Aspirin", "price":"218.32", "fda_date_approved":"26/07/2015" }, { "company_name":"Aurobindo Pharma Limited", "product":"carisoprodol", "price":"375.58", "fda_date_approved":"28/11/2014" }, { "company_name":"Apotex Corp", "product":"Risperidone", "price":"213.49", "fda_date_approved":"06/11/2015" }, { "company_name":"Unit Dose Services", "product":"Lovastatin", "price":"169.14", "fda_date_approved":"14/09/2015" }, { "company_name":"Jubilant HollisterStier LLC", "product":"Dog Hair Canis spp.", "fda_date_approved":"31/12/2014" }, { "company_name":"AAA Pharmaceutical, Inc.", "product":"ACETAMINOPHEN, CHLORPHENIRAMINE MALEATE, DEXTROMETHORPHAN HYDROBROMIDE, and PHENYLEPHRINE HYDROCHLORIDE", "price":"183.33", "fda_date_approved":"13/12/2015" }, { "company_name":"AKG Innovations LLC", "product":"AVOBENZONE, OCTINOXATE, OCTISALATE", "fda_date_approved":"22/01/2015" }, { "company_name":"hikma Farmaceutica", "product":"Oxytocin" }, { "company_name":"prime Packaging, Inc.", "product":"Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone", "price":"208.17" }, { "company_name":"Davion, Inc", "product":"Triclosan", "price":"80.30", "fda_date_approved":"13/12/2014" }, { "company_name":"CARDINAL HEALTH", "product":"CARBOXYMETHYLCELLULOSE SODIUM, GLYCERIN", "price":"330.22", "fda_date_approved":"11/08/2015" }, { "company_name":"Amgen Inc", "product":"darbepoetin alfa", "price":"332.28", "fda_date_approved":"01/07/2015" }, { "company_name":"Autumn Harp, Inc.", "product":"Salicylic Acid", "price":"34.43", "fda_date_approved":"25/03/2015" }, { "company_name":"American Regent, Inc.", "product":"sodium phosphate, monobasic, monohydrate and sodium phosphate, dibasic anhydrous", "price":"11.60" }, { "company_name":"J. A. Cosmetics U.S. INC", "product":"TITANIUM DIOXIDE", "price":"130.90", "fda_date_approved":"01/12/2015" }, { "company_name":"NATURE REPUBLIC CO., LTD.", "product":"Titanium Dioxide, OCTINOXATE, Zinc Oxide", "price":"124.48" }, { "company_name":"L. Perrigo Company", "product":"Dextromethorphan Hydrobromide, Guaifenesin", "price":"73.09", "fda_date_approved":"03/02/2016" } ];
var jsonData2 = [{ "first_name": "Billy", "last_name": "Campbell", "phone": "62-(500)527-5325" }, { "first_name": "Jonathan", "last_name": "Black", "country": "Russia", "phone": "7-(729)811-4597" }, { "first_name": "cheryl", "last_name": "Harvey", "country": "Indonesia", "phone": "62-(825)454-3810" }, { "first_name": "Cynthia", "last_name": "Cooper" }, { "first_name": "Thomas", "last_name": "Stevens", "phone": "86-(527)535-8464" }, { "first_name": "Jane", "last_name": "Chavez", "country": "Netherlands" }, { "first_name": "bobby", "last_name": "Price", "country": "China", "phone": "86-(898)723-6749" }, { "first_name": "Steve", "last_name": "Hansen", "phone": "93-(362)494-5552" }, { "first_name": "Alan", "last_name": "Cruz", "country": "Philippines", "phone": "63-(617)248-8832" }, { "first_name": "Dennis", "last_name": "Baker", "country": "Iran", "phone": "98-(436)329-3723" }, { "first_name": "Ernest", "last_name": "Bishop", "phone": "86-(566)429-1138" }, { "first_name": "Russell", "last_name": "Meyer", "phone": "62-(687)827-4302" }, { "first_name": "Ryan", "last_name": "Mendoza", "country": "Poland", "phone": "48-(537)109-0373" }, { "first_name": "Maria", "last_name": "Greene", "phone": "92-(831)367-8049" }, { "first_name": "Elizabeth", "last_name": "Moore", "country": "Philippines", "phone": "63-(694)844-9255" }, { "first_name": "Ronald", "last_name": "kim", "phone": "46-(339)931-9221" }, { "first_name": "Samuel", "last_name": "Jacobs", "country": "Russia", "phone": "7-(936)156-5229" }, { "first_name": "Fred", "last_name": "Ross", "phone": "55-(594)481-7354" }, { "first_name": "Andrew", "last_name": "Burns", "country": "Portugal", "phone": "351-(174)443-8706" }, { "first_name": "Robert", "last_name": "Frazier", "country": "Somalia" }];

// Choose dataset to use
var myTableData = jsonData2;

// Start program by calling createTable function with data
createTable(myTableData);

// Function to create the html and appends it to the html body
function createTable(tableData) {
  // Get all unique keys in table
  var keys = [...new Set(tableData.reduce(function(r, e) {
    r = r.concat(Object.keys(e));
    return r;
  }, []))];

  // Create html table
  var html = "<table><tr>";
  for (var i = 0; i < keys.length; i++) {
    html +=  "<th><a href='#" + keys[i] +  "' id='" + keys[i]  + "' >" + keys[i] + "</a></th>";
  }
  html += "</tr>";
  for (var key in tableData) {
    var myObject = tableData[key];
    html += "<tr>";
    for (var i = 0; i < keys.length; i++) {
      html += "<td>" +  myObject[keys[i]] + "</td>";
    }
    html += "</tr>";
  }
  html += "</table>";
  // Append the html to webpage body
  document.body.innerHTML = html;
}

// Listen to table header links for clicks
document.addEventListener("click", function (eventArgs) {
    var target = eventArgs.target;
    var elementToLookFor = "a";
    while (target !== null) {
        if (target.tagName.toLowerCase() === elementToLookFor) {
            // When clicked call the initial createTable function but pass into data using our custom sort method
            createTable(myTableData.sort(dynamicSort(target.id)));
        }
        target = target.parentElement;
    }
});

function dynamicSort(property) {
    return function (a,b) {
      // Make values lowercase if comparing strings
      if (typeof a[property] === 'string' || a[property] instanceof String)
        a[property] = a[property].toLowerCase();
      if (typeof b[property] === 'string' || b[property] instanceof String)
        b[property] = b[property].toLowerCase();
      // If values are both defined compare them, otherwise move undefined to bottom
      if(a[property] && b[property])
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      else if(a[property])
        var result = -1;
      else if(b[property])
        var result = 1;
      else
        var result = 0;
      return result;
    }
}
