import React from 'react'


class SearchBar extends React.Component {
    state = {
        text: ''
    }



// onChange = e => {
//     e.preventDefault();
//    this.setState({ text: e.target.value})
// }

onSubmit = e => {
    e.preventDefault()
  
    //pass cb into searchbar 
    //parent told what the current search term is
    this.props.onSubmit(this.state.text)
}


    render(){
        return(
            <div className=' search bar ui segment'>
                <form onSubmit={this.onSubmit} className='ui form'>
                    <div className='field'>
                    <label>Video Search</label>
                    <input
                    type='text'
                    value={this.state.text}
                    onChange={e => this.setState({text: e.target.value})}
                    />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;

