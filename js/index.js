const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

/*
  Select and update nav elements.
*/

let img_logo = document.getElementById('logo-img')
img_logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav_links = document.querySelectorAll('header > nav a')
nav_links = Array.from(nav_links)
nav_links.forEach((link, i) => link.textContent = siteContent["nav"][`nav-item-${i+1}`])

/*
  Select and update cta elements.
*/

let h1 = document.querySelector('h1')
h1.textContent = siteContent["cta"]["h1"]

let cta_button = document.querySelector('section.cta .cta-text button')
cta_button.textContent = siteContent["cta"]["button"]

let img_cta = document.getElementById('cta-img')
img_cta.setAttribute('src', 'img/header-img.png')

/*
  Select and update main-content elements.
*/

let top_content_h4 = document.querySelectorAll('section.main-content .top-content h4')
top_content_h4[0].textContent = siteContent["main-content"]["features-h4"]
top_content_h4[1].textContent = siteContent["main-content"]["about-h4"]

let top_content_p = document.querySelectorAll('section.main-content .top-content p')
top_content_p[0].textContent = siteContent["main-content"]["features-content"]
top_content_p[1].textContent = siteContent["main-content"]["about-content"]

let img_middle = document.getElementById('middle-img')
img_middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottom_content_h4 = document.querySelectorAll('section.main-content .bottom-content h4')
bottom_content_h4[0].textContent = siteContent["main-content"]["services-h4"]
bottom_content_h4[1].textContent = siteContent["main-content"]["product-h4"]
bottom_content_h4[2].textContent = siteContent["main-content"]["vision-h4"]

let bottom_content_p = document.querySelectorAll('section.main-content .bottom-content p')
bottom_content_p[0].textContent = siteContent["main-content"]["services-content"]
bottom_content_p[1].textContent = siteContent["main-content"]["product-content"]
bottom_content_p[2].textContent = siteContent["main-content"]["vision-content"]

/*
  Select and update contact elements.
*/

let contact = document.querySelector('section.contact')
contact.children[0].textContent = siteContent["contact"]["contact-h4"]
contact.children[1].textContent = siteContent["contact"]["address"]
contact.children[2].textContent = siteContent["contact"]["phone"]
contact.children[3].textContent = siteContent["contact"]["email"]

/*
  Select and update footer elements.
*/

let footer = document.querySelector('footer p')
footer.textContent = siteContent["footer"]["copyright"]

/*
  Change navigation text to green
*/

nav_links.forEach(link => link.style.color = "green")
