const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_element'>

                <div className="group">
                    <label htmlFor="title">Group Id</label>
                    <span style={{position: 'absolute', marginLeft: '-50px',marginTop:' 27px', color:"lightgrey"}}><i class="fas fa-search"></i></span>
                    <input type="list" name="title" id="title" className="group_control" placeholder="      Search" />
                    <span style={{position: 'absolute', marginLeft: '-30px',marginTop:' 7px', color:"blue"}}><i class="fas fa-sort-down"></i></span>
                </div>
            </div>
            
            <div className='sidebar_element'>
                <div className="group">
                    <label htmlFor="title">Dashboard Id</label>
                    <input type="list" name="title" id="title" className="group_control" placeholder="Search" />
                </div>
            </div>
            
            <div className='sidebar_element'>
                <div className="group">
                    <label htmlFor="title">Dashboard Head</label>
                    <input type="list" name="title" id="title" className="group_control" placeholder="Search" />
                </div>
            </div>
            
            <div className='sidebar_element'>
                <div className="group">
                    <label htmlFor="title">Dataset</label>
                    <span style={{position: 'absolute', marginLeft: '-50px',marginTop:' 27px', color:"lightgrey"}}><i class="fas fa-search"></i></span>
                    <input type="list" name="title" id="title" className="group_control" placeholder="      Search" />
                    <span style={{position: 'absolute', marginLeft: '-30px',marginTop:' 7px', color:"blue"}}><i class="fas fa-sort-down"></i></span>
                </div>
            </div>
            
            <div className='sidebar_element'>
                <div className="group">
                    <label htmlFor="title">Filter Alignment</label>
                    <input type="list" name="title" id="title" className="group_control" placeholder="Search" />
                </div>
            </div>

            <div className='sidebar_element'>
                <div className="group">
                    <label htmlFor="title">Filters</label>
                </div>
            </div>
            
        </div>
    );
};
export default Sidebar;