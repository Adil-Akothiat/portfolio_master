const projects = document.querySelector('.projects');
async function fetchData(API) {
    return await fetch(API).then(response=> response.json());
}
const iconGithub = `<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M9.99968 0C4.47774 0 0 4.49452 0 10.0403C0 14.4755 2.86484 18.2387 6.84 19.5661C7.33968 19.6587 7.52194 19.3487 7.52194 19.0823C7.52194 18.8442 7.51323 18.2129 7.50839 17.3748C4.72613 17.9823 4.13935 16.029 4.13935 16.029C3.68516 14.869 3.02968 14.561 3.02968 14.561C2.12129 13.9377 3.09806 13.9497 3.09806 13.9497C4.10129 14.0203 4.62935 14.9848 4.62935 14.9848C5.52226 16.519 6.97064 16.0755 7.54032 15.8184C7.63032 15.17 7.88935 14.7271 8.17484 14.4765C5.95484 14.2226 3.62065 13.3619 3.62065 9.51517C3.62065 8.41936 4.01 7.52291 4.64968 6.82033C4.54613 6.56645 4.20323 5.54613 4.7471 4.16419C4.7471 4.16419 5.5871 3.89452 7.4971 5.19323C8.29484 4.97065 9.15032 4.85936 10.001 4.85484C10.8497 4.85936 11.7058 4.97032 12.5048 5.19323C14.4132 3.89452 15.2519 4.16419 15.2519 4.16419C15.7971 5.54613 15.4542 6.56645 15.351 6.82033C15.9923 7.52291 16.3794 8.41904 16.3794 9.51517C16.3794 13.3716 14.0413 14.22 11.8135 14.469C12.1726 14.779 12.4923 15.3913 12.4923 16.3284C12.4923 17.671 12.4803 18.7529 12.4803 19.0823C12.4803 19.3513 12.6606 19.6639 13.1677 19.5648C17.1377 18.2348 20 14.4742 20 10.0403C20 4.49452 15.5223 0 9.99968 0Z' fill='#0077B7'/>
</svg>
`;
getData();
function getData() {
    fetchData('../js/file.json').then(projts=> {
        projts.forEach(pr=> {
            const mainDiv = document.createElement('div');
            const nestedDiv_1 = document.createElement('div');
            const nestedDiv_2 = document.createElement('div');

            nestedDiv_1.setAttribute('class','technologies');
            nestedDiv_2.setAttribute('class','pro_src');
            mainDiv.setAttribute('class', 'card');
            mainDiv.innerHTML = 
            `
            <img src='${pr.img}' alt='${pr.name}'>
            <h4>${pr.name}</h4>
            `;
            pr.technologies.forEach(techn=> {
                const tech = document.createElement('div');
                tech.textContent = techn;
                nestedDiv_1.appendChild(tech);
            })
            nestedDiv_2.innerHTML = 
            `
            ${iconGithub}
            <a href='${pr.sourceCode}' target='_blank' alt='src code'>
                Source Code
            </a>
            <a href='${pr.demoSite}' target='_blank' alt='demo site'>
                Demo
            </a>
            `
            mainDiv.appendChild(nestedDiv_1);
            mainDiv.appendChild(nestedDiv_2);
            projects.appendChild(mainDiv);
        })
    })
}