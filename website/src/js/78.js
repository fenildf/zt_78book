/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-06-29 20:22:48
 * @version $Id$
 */
/**
 * 为了使触摸事件生效，在渲染所有组件之前调用
 */
React.initializeTouchEvents(true);

var a1 = document.getElementById('areaBody1');
var a2 = document.getElementById('areaBody2');
var a3 = document.getElementById('areaBody3');
var a4 = document.getElementById('areaBody4');

var Item = React.createClass({
	render: function() {
		console.log(this.props.list);
		var _item = this.props.list.map(function(d, i){
			return (
				<li className="area-item" key={d.id}>
					<div className="am-gallery-item">
						<div className="area-item-pic">							
							<img src={d.picUrl} alt={d.title} />
						</div>
						<div className="area-item-content am-text-center">
							<h3 className="am-gallery-title am-text-lg">{d.title}</h3>
							<div className="am-gallery-desc">
								<span className="am-text-xl am-color-pink">特惠价:￥{d.discountPrice} </span>
								<del className="am-text-sm">原价:￥{d.price}</del>
							</div>	
							<div className="area-item-btn">
								<a className="am-btn am-btn-pink am-text-xxl" href={d.link} target="_blank">立即抢购</a>
							</div>
						</div>
						
					</div>
				</li>
			);
		}, this);
		return (
			<ul data-am-widget="gallery" className="am-gallery am-avg-sm-2
  am-avg-md-3 am-avg-lg-4 am-gallery-default">
  				{_item}
  			</ul>
		); 
	}
});

var Items = React.createClass({
	getInitialState : function(){
		return {data : []}
	},
	componentDidMount : function(){
		this.loadList();
	},
	loadList : function(){
		$.ajax({
			url : this.props.url,
			dataType : 'json',
			success : function(result){
				console.log(result)
				this.setState({data : result.items});
			}.bind(this)
		});
	},
	render: function() {
		return (
			<Item list={this.state.data} />
		);
	}
});

React.render(<Items url="data/book_t1.json" />, a1);
React.render(<Items url="data/book_t2.json" />, a2);
React.render(<Items url="data/book_t3.json" />, a3);
React.render(<Items url="data/book_t4.json" />, a4);