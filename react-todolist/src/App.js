import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '这是我的 react-todolist ！',
      thing: '',
      list: []
    }
  }

  _add(e) {
    if (e.keyCode === 13) {
      var listArr = this.state.list;
      listArr.push({
        thing: this.inputElement.value,
        ok: false
      })
      this.setState({
        list: listArr
      })
      this.inputElement.value = "";
    }
  }

  _change(i) {
    var changeList = this.state.list;
    for (let index in changeList) {
      if (index == i) {
        changeList[i].ok = !changeList[i].ok;
      }
    }
    this.setState({
      list: changeList
    })
  }

  _del(i) {
    var ListArr = this.state.list;
    ListArr.splice(i, 1);
    this.setState({
      list: ListArr
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <input type="text"
          ref={(a) => this.inputElement = a}
          onKeyUp={(e) => this._add(e)} />
        <div>
          <h4>未完成：</h4>
          <ul>
            {this.state.list.map((item, index) => {
              if (!item.ok) {
                return (
                  <li key={index}>
                    <input type="checkbox"
                      checked={item.ok}
                      onChange={() => this._change(index)} />
                    {index} -- {item.thing}
                    <input type="button" value="删除" onClick={() => this._del(index)} />
                  </li>
                )
              }
            })}
          </ul>
        </div>

        <div>
          <h4>已完成：</h4>
          <ul>
            {this.state.list.map((item, index) => {
              if (item.ok) {
                return (
                  <li key={index}>
                    <input type="checkbox"
                      checked={item.ok}
                      onChange={() => this._change(index)}
                    />
                    {index} -- {item.thing}
                    <input type="button" value="删除"
                      onClick={() => this._del(index)} />
                  </li>
                )
              }
            })}
          </ul>
        </div>

      </div>
    )
  }
}


export default App;
