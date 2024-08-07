import { createRoot } from "react-dom/client";
import './style.css';
const card = <div className="card">
    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818"/>
    <h2>iphone 13 pro</h2>
    <p>Apple</p>
    <p><b>$399</b></p>
</div>

const container = [
    card,
    card,
    card,
    card,
    card,
    card,
]
const root = createRoot(document.getElementById('root'));

root.render(<div className="container">{container}</div>);