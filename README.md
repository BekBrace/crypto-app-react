#Important notes on react hooks in general and {useState, useEffect} in particular 

#You cannot use React hooks in class components, they must be function components.

#if you try to do:

class App extends React.component {

#It will not work

}

Because classes have their own way to do things like what hooks do.

Another point to remember: that we cannot put react hooks inisde if conditionals, you cannot put them in functions, in for loops.

if (true) {
    useState()
}

They should operate on their own.

Also they should operate in the same order:

To use useState hook, you call the useState() function, and we will pass the default state.

useState(default) , this useState hook will return to us an array of values, so we can assign it a variable called arr
const arr = useState(default)
But remember that the useState() function will always return an array of 2 values.
so what we can do here is to destructure the variable in two different variables

const [initial_state, function_to_update_the_state] = useState(default)

------------------------------------------------------------------------------------

Explaining the <tbody> code block:

This code is written in JSX syntax and is used to render a table containing cryptocurrency data.

Here's a step-by-step breakdown of the code:
--------------------------------------------
    
{crypto - This line suggests that crypto is an array of cryptocurrency data that is being mapped over to create the table rows.

.filter((val)=> { return val.name.toLowerCase().includes(search)}) - This line is filtering the crypto array based on the search value. The search value is expected to be a string and is being used to filter the name field of the val object.

.map((val, id)=> { ... } - This line is mapping over the filtered crypto array to create a table row for each item.

return ( <> ... </> ) - This line is returning the JSX code that creates the table row. The <> and </> tags are shorthand for a React.Fragment component, which allows you to return multiple elements without needing to wrap them in a single parent element.

<tr id="id"> - This line creates a table row element and sets the id attribute to "id".

<td className="rank">{val.rank}</td> - This line creates a table cell element for the cryptocurrency rank.

<td className="logo"> - This line creates a table cell element for the cryptocurrency logo.

<a href={val.websiteUrl}> - This line creates an anchor tag element with the href attribute set to the websiteUrl value of the val object.

<img src={val.icon} alt="logo" width="30px"/> - This line creates an image tag element with the src attribute set to the icon value of the val object, and sets the alt attribute to "logo" and the width attribute to "30px".

<p>{val.name}</p> - This line creates a paragraph tag element containing the name of the cryptocurrency.

</a> - This line closes the anchor tag element.

<td className="symbol">{val.symbol}</td> - This line creates a table cell element for the cryptocurrency symbol.

<td>$ {Math.round(val.marketCap)} </td> - This line creates a table cell element for the cryptocurrency market capitalization, and rounds the value using Math.round().

<td>$ {Math.round(val.price)} </td> - This line creates a table cell element for the cryptocurrency price, and rounds the value using Math.round().

<td>{val.availableSupply}</td> - This line creates a table cell element for the cryptocurrency available supply.

</tr> - This line closes the table row element.

Overall, this code filters the crypto array based on the search value and maps over the filtered array to create a table row for each item. The table row contains information about the cryptocurrency, including its rank, logo, name, symbol, market capitalization, price, and available supply.
