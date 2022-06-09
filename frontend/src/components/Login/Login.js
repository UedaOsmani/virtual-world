import React, {useState} from "react";
import Axios from 'axios';

/*
export default class FormDataComponent extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }
    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
} */

function Login() {

/*const url="https://virtual-ninjas-backend.herokuapp.com/api" */
const url="https://frozen-mesa-35935.herokuapp.com/"
const [data, setData] = useState({
    name:"",
    date:"",
    roomNr:""
})

function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
}
function submit(e) {
    e.preventDefault();
  /*  Axios.post(`${url}/event/join`,{
        name:data.name,
        date: date.date,
        roomNr: parseInt(data.roomNr)
    })
    .then(res=> {
        console.log(res.data)
    })
    */

    Axios.post(url,{
        name:data.name,
        date: date.date,
        roomNr: parseInt(data.roomNr)
    })
    .then(res=> {
        console.log(res.data)
    })
}

    return (
        <div>
            <form onSubmit={(e)=>submit(e)}>
            <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" placeholder="name" />
            <input onChange={(e)=>handle(e)} id="date" value={data.date} type="date" placeholder="name" />
            <input onChange={(e)=>handle(e)} id="roomNr" value={data.roomNr} type="number" placeholder="roomNr" />
            <button>Submit</button>
            </form>

        </div>
    )
}

export default Login
