import react from 'react';
function Datadisplay extends React.Component
{
function welcom(props){
return<h1> hello,{props.name}</h1>
}
function App(){
    return(
        <div>
            <welcome name="abhi"/>
            <welcome name="chinna"/>
            <welcome name="banu"/>
        </div>
    );
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);
}