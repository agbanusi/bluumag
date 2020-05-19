import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    var prop={writer:{name:'James',profile_pic:'https://www.pngitem.com/pimgs/m/3-36378_standing-man-with-white-background-png-man-in.png'},id:1,banner:'https://www.pngitem.com/pimgs/m/3-36378_standing-man-with-white-background-png-man-in.png',title:'A testing',body:'The University of Ibadan (UI) is the oldest degree awarding institution in Nigeria,[2][3] and is located five miles (8 kilometres) from the centre of the major city of Ibadan in Western Nigeria. It is popularly known as Unibadan or UI.Besides the College of Medicine, there are twelve other faculties: Arts, Science, Agriculture and Forestry, Renewable Natural Resources, Social Sciences, Education, Veterinary Medicine, Pharmacy, Technology, Law, Public Health, and Dentistry. A thirteenth, Economics, Environmental Design and Management, is proposed. The University of Ibadan has several halls of residence. They have 3 female halls which are Queen Elizabeth Hall, Queen Idia Hall and Obafemi Awolowo Hall which is the largest female hall in West Africa. They have 6 male hall of residence which are Lord Tedder Hall, Kenneth Mellanby Hall, Sultan Bello Hall, Nnamdi Azikiwe Hall, Independence Hall and Kuti Hall. There are also some post graduate hall such as Tafawa Balewa Hall.The university has residential and sports facilities for staff and students on campus, as well as separate botanical and zoological gardens. In September 2016, it became the first Nigerian university to make the top 1000 in Times Higher Education rankings. Prior to that, it had always made the top 10 African Universities in Webometrics Rankings.',created_date:'July 10, 2019',category:'Education'}
    //The code below will be uncommented when to use from backend, and the one above should be commented
    //var prop=d3.json(this.props)
    return (
      <div className='render'>
        <div className='banner'>
        <div className='title'>
          <h1>{prop.title}</h1>
        </div>
        <div className='date'><p>{prop.created_date}</p></div>
        <div className='author'>
          <h3>{prop.writer.name}</h3>
          <img src={prop.writer.profile_pic} />
        </div>
        </div>
        <div className='body'>
          <article className='article'>{prop.body}</article></div>
        <div className='icons'>
          <a href='' className='instagram' target='_blank'><i className="fab fa-instagram"></i></a>
          <a href='' className='facebook' target='_blank'><i className="fab fa-facebook"></i></a>
          <a href='' className='whatsapp' target="_blank"><i className="fab fa-whatsapp"></i></a>
        </div>        
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
