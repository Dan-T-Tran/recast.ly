class Search extends React.Component {
  constructor(props){
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(text) {
    this.props.method(text.target.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={this.onSearch}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
    );
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
