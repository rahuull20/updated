import React from 'react';
import './css/addpublication.css'
const AddProduct = () => {
    //collect data when button is clicked
    const [fa1, setFa1] = React.useState('');
    const [fa2, setFa2] = React.useState('');
    const [fa3, setFa3] = React.useState('');
    const [ieee, setIeee] = React.useState('');
    const [uid, setUid] = React.useState('');
    const [name, setName] = React.useState('');
    const [cse, setCse] = React.useState('');
    const [top, setTop] = React.useState('');
    const [topc, setTopc] = React.useState('');
    const [py, setPy] = React.useState('');
    const [isbn, setIsbn] = React.useState('');
    const [ai, setAi] = React.useState('');
    const [nop, setNop] = React.useState('');
    const [doi, setDoi] = React.useState('');
    const [scc, setScc] = React.useState('');
    const [chi, setChi] = React.useState('');
    const [error, setError] = React.useState(false);
    const [  selectedValue1, setSelectedValue1 ] = React.useState(''); 
  
    const handleRadioChange1 = ( 
        value 
    ) => { 
        setSelectedValue1(value); 
    }; 
    const [ 
        selectedValue2, 
        setSelectedValue2, 
    ] = React.useState(''); 
  
    const handleRadioChange2 = ( 
        value 
    ) => { 
        setSelectedValue2(value); 
    }; 
    const [ 
        selectedValue3, 
        setSelectedValue3, 
    ] = React.useState(''); 
  
    const handleRadioChange3 = ( 
        value 
    ) => { 
        setSelectedValue3(value); 
    };

    const [data1, setData1] = React.useState('');
 
    const options1 = [
        
        "Journal",
        "conference",
        "Book Chapter",
        "Tfb",
        "Patent"
    ];
    const onOptionChangeHandler1 = (event) => {
        setData1(event.target.value);
        console.log(
            "User Selected Value - ",
            event.target.value
        );
    };
    const [data2, setData2] = React.useState('');
 
    const options2 = [
        "January",
        "february",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Nov",
        "Dec"
    ];
    const onOptionChangeHandler2 = (event) => {
        setData2(event.target.value);
        console.log(
            "User Selected Value - ",
            event.target.value
        );
    };




    const addProduct = async () => {
        
        
    console.warn(fa1,fa2,fa3,ieee,uid,name,cse,top,topc,py,isbn,ai,nop,doi,scc,chi,selectedValue1,selectedValue2,selectedValue3,data1,data2);
        const userId = JSON.parse(localStorage.getItem('user'))._id;//fetched user id

        //intergrate with backend
       let result = await fetch("http://localhost:5000/addproduct", {
            method: 'post',
            body: JSON.stringify({ fa1,fa2,fa3,ieee,uid,name,cse,top,topc,py,isbn,ai,nop,doi,scc,chi,selectedValue1,selectedValue2,selectedValue3,data1,data2,userId }),
            headers: {
                'Content-Type': 'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`,
            },
        });
        result = await result.json();
        console.warn(result);
        alert("Product Added Successfully")

    }



    return (
        
        <div className="App"> 
        <fieldset> 
            <form action="#" method="get"> 
            <table>
                <tr>
                    <td>
                        <label for="firstname">Faculty Author 1</label> 
                <input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    required 
                    value={fa1} onChange={(e) => { setFa1(e.target.value) }}
                /> 
                 </td>
                 <td>
                <label for="lastname">Faculty Author 2</label> 
                <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    required 
                    value={fa2} onChange={(e) => { setFa2(e.target.value) }}
                />
                 </td>
                 <td>
                 <label for="lastname">Faculty Author 3</label> 
                <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={fa3} onChange={(e) => { setFa3(e.target.value) }}
                    required 
                />
                 </td>
                </tr>
            <tr>
                <td>
                <label for="lang">This publication is with</label> 
                <br /> 
                <div className='r1'>
                <input type="radio" name="lang"
                    id="phd"  
                    checked={ 
                        selectedValue1 === 
                        "phd"
                    } 
                    onChange={() => 
                        handleRadioChange1( 
                            "phd"
                        ) 
                    }/> 
                PhD Scholar
                
                </div>
                <div className='r1'>
                <input type="radio" name="lang"
                    id="pg" /> 
                PG Students 
                </div>
                <div className='r1'>
                <input type="radio" name="lang"
                    id="ug" 
                    checked={ 
                        selectedValue1 === 
                        "ug"
                    } 
                    onChange={() => 
                        handleRadioChange1( 
                            "ug"
                        ) 
                    } /> 
                UG Students 
                </div>
                <div className='r1'>
                <input type="radio" name="lang"
                    id="industry"
                    checked={ 
                        selectedValue1 === 
                        "industry"
                    } 
                    onChange={() => 
                        handleRadioChange1( 
                            "industry"
                        ) 
                    }  /> 
                Industry 
                </div>
                <div className='r1'>
                <input type="radio" name="lang"
                    id="oc" 
                    checked={ 
                        selectedValue1 === 
                        "oc"
                    } 
                    onChange={() => 
                        handleRadioChange1( 
                            "oc"
                        ) 
                    } /> 
                Other Collarboration
                </div>
                <div className='r1'>
                <input type="radio" name="lang"
                    id="cf"
                    checked={ 
                        selectedValue1 === 
                        "cf"
                    } 
                    onChange={() => 
                        handleRadioChange1( 
                            "cf"
                        ) 
                    } /> 
                Co Faculty 
                </div>
                <div className='r1'>
                <input type="radio" name="lang"
                    id="no"
                    checked={ 
                        selectedValue1 === 
                        "none"
                    } 
                    onChange={() => 
                        handleRadioChange1( 
                            "none"
                        ) 
                    }  /> 
                None 
                </div>
               
                </td>
            </tr>
               
                <tr>
                    <td>
                    <label>Select Publication to Enter</label> 
                <select name="select" id="select" onChange={onOptionChangeHandler1}> 
                    <option value="" disabled selected> 
                        Choose
                    </option> 
                    {options1.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option> 
                    );
                })}
                       
                </select> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="firstname">Full IEEE Reference</label> 
                <input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    required 
                    value={ieee} onChange={(e) => { setIeee(e.target.value) }} 
                /> 
                 </td>
                 <td>
                <label for="lastname">Unique ID</label> 
                <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={uid} onChange={(e) => { setUid(e.target.value) }} 
                    required 
                />
                 </td>
                 <td>
                 <label for="lastname">Name of faculty Author(s)</label> 
                <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={name} onChange={(e) => { setName(e.target.value) }} 
                    required 
                />
                 </td>
                </tr>
                <tr>
                    <td>
                        <label for="firstname">Department</label> 
                <input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={cse} onChange={(e) => { setCse(e.target.value) }} 
                    required 
                /> 
                 </td>
                </tr>
                <tr>
                    <td>
                        <label for="firstname">Title of the Paper</label> 
                <input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={top} onChange={(e) => { setTop(e.target.value) }} 
                    required 
                /> 
                 </td>
                 <td>
                <label for="lastname">Title of the proceedings of the conference</label> 
                <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={topc} onChange={(e) => { setTopc(e.target.value) }} 
                    required 
                />
                 </td>
                </tr>
                <tr>
                    <td>
                    <label for="gender">Conference Type</label> 
                <br /> 
                  <div className='r1'>
                <input type="radio" name="gender"
                    checked={ 
                        selectedValue2 === 
                        "ic"
                    } 
                    onChange={() => 
                        handleRadioChange2( 
                            "ic"
                        ) 
                    }  id="ic" /> 
                    
                IC 
                </div>
                <div className='r1'>
                <input type="radio" name="gender"
                    checked={ 
                        selectedValue2 === 
                        "nc"
                    } 
                    onChange={() => 
                        handleRadioChange2( 
                            "nc"
                        ) 
                    }  id="nc" /> 
                NC
                </div>
                    </td>
                    <td>
                    <label>Month of the publication</label> 
                <select name="select" id="select" onChange={onOptionChangeHandler2}> 
                    <option value="" disabled selected> 
                        choose 
                    </option> 
                    {options2.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                 
                </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="firstname">Publication Year</label> 
                <input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={py} onChange={(e) => { setPy(e.target.value) }} 
                    required 
                /> 
                 </td>
                 <td>
                <label for="lastname">ISBN/ISSN number</label> 
                <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={isbn} onChange={(e) => { setIsbn(e.target.value) }} 
                    required 
                />
                 </td>
                 <td>
                 <label for="lastname">Affiliation Institute</label> 
                <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={ai} onChange={(e) => { setAi(e.target.value) }} 
                    required 
                />
                 </td>
                </tr>
                <tr>
                    <td>
                        <label for="firstname">Name of Publisher</label> 
                <input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    required 
                    value={nop} onChange={(e) => { setNop(e.target.value) }} 
                /> 
                 </td>
                 <td>
                 <label for="gender">Indexed in SCOPUS</label> 
                <br /> 
                <div className='r1'>
                <input type="radio" name="gender"
                    checked={ 
                        selectedValue3 === 
                        "yes"
                    } 
                    onChange={() => 
                        handleRadioChange3( 
                            "yes"
                        ) 
                    }  id="yes" /> 
                    
                Yes 
                </div>
                <div className='r1'>
                <input type="radio" name="gender"
                    checked={ 
                        selectedValue3 === 
                        "no"
                    } 
                    onChange={() => 
                        handleRadioChange3( 
                            "no"
                        ) 
                    }  id="no" /> 
                    
                No
                </div>
                
                 </td>
                 <td>
                 <label for="lastname">DOI of the paper</label> 
                <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={doi} onChange={(e) => { setDoi(e.target.value) }} 
                    required 
                />
                 </td>
                </tr>
                <tr>
                    <td>
                        <label for="firstname">SCOPUS citation count</label> 
                <input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    required 
                    value={scc} onChange={(e) => { setScc(e.target.value) }} 
                /> 
                 </td>
                 <td>
                <label for="lastname">Conference H-Index</label> 
                <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={chi} onChange={(e) => { setChi(e.target.value) }}  
                    required 
                />
                 </td>
                 
                </tr>
                <tr>
                    <td>
                    <label for="file">Upload Resume*</label> 
                <input 
                    type="file"
                    name="file"
                    id="file"
                    placeholder="Enter Upload File"
                    required 
                />   
                 </td>
                
                </tr>
                
                <label>Submit OR Reset</label> 
                <br /> 
                <button type="reset" value="reset"> 
                    Reset 
                </button> 
                <button onClick={addProduct} type="submit" value="Submit"> 
                    Submit 
                </button> 
            
            </table>
            </form>   
        </fieldset> 
    </div> 
    )
}
export default AddProduct