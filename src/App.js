import Card from "./components/Card";
import './App.css';

function App() {
  const data1 = [['Single User', '5GB Storage', 'Unlimited Public Projects', 'Community Access'], 
  ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain'],
  ['Unlimited Users', '150GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Unlimited Free Subdomains', 
  'Monthly Status Reports']];

  const data2 = [['Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'],
  ['Monthly Status Reports'],[]]
  
  return (
     
    <div className="Card-container">
    <Card name="FREE" price="0"  data1= {data1[0]} data2={data2[0]}/>
    <Card name="PLUS" price="9"  data1= {data1[1]} data2={data2[1]}/>
    <Card name="PRO"  price="49" data1= {data1[2]} data2={data2[2]}/>
    </div>
  );
}

export default App;
