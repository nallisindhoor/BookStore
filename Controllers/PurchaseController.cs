using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace sbs.Controllers
{
    [ApiController]
    [Route("[purchase]")]
    public class PurchaseController : ControllerBase
    {
        public PurchaseController()
        {
        }


        [Route("shipping")]
        public double CalculateShippingForToday(int serviceType)
        {

            // too many logic statements

            double cost = 0;

            switch (serviceType)
            {
                case 1:
                    cost = 5;
                    break;
                case 2:
                    cost = 10;
                    break;
                case 3:
                    cost = 20;
                    break;
            }

            int currentMonth = DateTime.Now.Month;

            if(currentMonth >= 6 && currentMonth <= 8)
            {
                switch (serviceType)
                {
                    case 1:
                        cost *= 0.5;
                        break;
                    case 2:
                        cost *= 0.8;
                        break;
                    case 3:
                        cost *= 0.8;
                        break;
                }
            }
            else if(currentMonth == 9)
            {
                switch (serviceType)
                {
                    case 1:
                        cost *= 1.5;
                        break;
                    case 2:
                        cost *= 1.8;
                        break;
                    case 3:
                        cost *= 2;
                        break;
                }
            }

            return cost;
        }

    }
}
