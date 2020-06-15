// Lab 1  - Function that finds all list items from unordered list,
//          adds them to array and then display them in another element
function extractText() 
{
    let items = [];
    $('#items').each(function() {
        $(this).find('li').each(function(){
            items.push( $(this).text() );
        });       
    });
    
    $("#result").text(items.join(", "));
} // End of Extract


// Lab 2 - Function for searching from unordered list which gives back number of matches,
//         and assigns css class which bolds found matches
function search()
{   
    let searchValue = $("#searchText").val().toLowerCase();
    let found = 0;
    $("#towns li").each(function()
    {
        let town = $(this).text().toLowerCase();  
        if (searchValue != "")
        {
            // Check if town names from list has
            // search value that user gives. 
            // Returns -1 if there is no match.
           
            // If searched for 'a' in "abc" returns 0
            // because 'a' is on index/position 0 in 'abc'
            if(town.indexOf(searchValue) !== -1 ) 
                {                                
                    $(this).addClass("found");    
                    found++;
                }
            else 
                {
                    $(this).removeClass("found"); 
                }
        }
        else 
            {
              $(this).removeClass("found");
            }
    });
    $("#searchResult").text(found + " matches found.");
} // End of Search 


// Lab 3 - Where user can add/remove and move up and down Country and its Capital
function initializeTable()
{
    $('#createLink').on('click', createCountry);

    addCountry('Sweden', 'Stockholm');
    addCountry('Germany', 'Berlin');
    addCountry('France', 'Paris');
    addCountry('France', 'Paris');
    fixRowLinks();

function createCountry()
{  
    let country = $("#newCountryText").val(); // Takes country value from input
    let capital = $("#newCapitalText").val(); // Takes capital value from input
    addCountry(country,capital); // Calls function, passing country and capital as arguments
    fixRowLinks(); 
    // Forcing 'a hrefs' in table to be displayed in line
    // Hides 'Up'/'Down' a href for first and last table row
}

function addCountry(country, capital)
    {   
        let tableRow = $('<tr>')                          // Makes table row
                        .append($('<td>').text(country))  // Adds 1 cell of table data with country  
                        .append($('<td>').text(capital)) // Adds 1 cell of table data with capital
                        .append($('<td>')                // Adds empty cell of table data
                            //
                            // Adds 3 'a hrefs' to previously added empty cell
                            .append($('<a href = "javascript:void()" class="btn btn-primary">Up</a>').on('click', moveUp))
                            .append($('<a href = "javascript:void()" class="btn btn-primary">Down</a>').on('click', moveDown))
                            .append($('<a href = "javascript:void()" class="btn btn-primary">Delete</a>').on('click', deleteRow)));
        tableRow.appendTo($('#countriesTable'));
        // Adds row to the table
    }

function moveUp()
{
    let row = $(this).parent().parent();
    
    row.fadeOut(function()
    { 
        row.prev().before(row);
        row.fadeIn();
        fixRowLinks();
        console.log(row);
    });
}

function moveDown()
{
    let row = $(this).parent().parent();
    row.fadeOut(function()
    { 
        row.next().after(row);
        row.fadeIn();
        fixRowLinks();
        console.log(row);
    });
}

function deleteRow()
{   
    $(this).parent().parent().remove();
}

function fixRowLinks()
{   
    $('#countriesTable a').css('display', 'inline');
    $('#countriesTable tr:nth-child(3) td a:contains("Up")').css('display', 'none');
    $('#countriesTable tr:last-child td a:contains("Down")').css('display', 'none');
}

} // End of Table of Countries


// Lab 4 
function attachEvents()
{
    let btn = $(".button");
    btn.click(function()
    {
        btn.removeClass("selected");
        $(this).toggleClass("selected");
    });
}
