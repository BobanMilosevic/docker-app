using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace docker_app.Pages
{
    public class Privacy_3 : PageModel
    {
        private readonly ILogger<Privacy_3> _logger;

        public Privacy_3(ILogger<Privacy_3> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}