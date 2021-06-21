using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Loteria
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btn_Click(object sender, EventArgs e)
        {
            byte[] sorteo = new byte[6];
            Random rdm = new Random();
            rdm.NextBytes(sorteo);

            foreach (var item in sorteo)
            {
                
            }
        }
    }
}