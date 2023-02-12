(function ()
{
const customerImage=document.querySelector('#customer-img');
const customerName=document.querySelector('#customer-name');
const customerText=document.querySelector('#customer-text');

const btn=document.querySelectorAll('.btn');

let index=0;
const customers=[];
function Customer(img,name,text){

    this.img=img;
    this.name=name;
    this.text=text;
}

function createCustomer(img,name,text)
{
    let Img=`./img/${img}.jpg`;
    let customer=new Customer(Img,name,text)

    customers.push(customer);
}

createCustomer(0,'Jessie','xwk  ck bq jcbj jchbc cbcn cb jcbwjhbc jbcbjjwc jcbc bcb jcjbq cjbq db du2gg cbb2b cbjqc cqkcb cjwbc jwbhjk jw bk  wjkj .');
createCustomer(1,'John','bj xwk jcbj jchbc cbcn cb jcbwjhbc jbcbjjwc jcbc bcb jcjbq cjbq db du2gg cbb2b cbjqc cqkcb jcwgg wjb wb w jkb bwbkwkbkb .');
createCustomer(2,'Dravid','cdj xwk jcbj jchbc qvcjqbq chjbj cbbbbc cbcn cb jcbwjhbc jbcbjjwc jcbc bcb jcjbq cjbq db du2gg cbb2b cbjqc cqkcb.');
createCustomer(3,'Hannah','xwk jcbj  jchbc cbcn cb jcbwjhbc jbcbjjwc jcbc bcb jcjbq cjbq db du2gg cbb2b cbjqc cqkcb.');

btn.forEach(function(button)
{
    button.addEventListener('click',function(e)
    {
        if(e.target.parentElement.classList.contains('prevBtn'))
        {
            if(index===0)
            {
                index=customers.length();

            }
            index--;
            customerImage.src=customers[index].img;
            customerName.textContent=customers[index].name;
            customerText.textContent=customers[index].text;
        }

        if(e.target.parentElement.classList.contains('nextBtn'))
        {
            
           if(index===customers.length)
           index=0;
           else
           index++;
        
            customerImage.src=customers[index].img;
            customerName.textConten=customers[index].name;
            customerText.textContent=customers[index].text;
        }
    })
})

})()
