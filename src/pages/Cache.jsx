import React from 'react'

export const Cache = () => {
    return (
        <div className='d-flex flex-column mb-3 faq-cont' style={{ background: "#FFEEF7", fontFamily: "Montserrat" }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5rem' }}>
                <h1 style={{ fontSize: "45px", fontWeight: "bold", marginBottom: "6rem" }}>Purge Cache</h1>
            </div>

            <div className="outer-container">
                <div className="inner-container">
                    <h1 style={{ fontSize: "45px", fontWeight: "bold", marginTop: "2rem", textAlign: "center" }}>WARPVPN</h1>
                    <p>WARPVPN’s Purge Cache tool allows you to refresh WARPVPNS's DNS cache for domain names. To refresh the cache for a domain name, enter the name for the domain below, pick the DNS record type and then hit the Purge Cache.</p>
                    <div className="d-flex flex-column mb-3 p-4 border rounded" style={{ maxWidth: '400px', margin: 'auto', marginTop: "3rem", backgroundColor: '#f9f9f9' }}>
                        <p className="h5 mb-4">Purge cache for domain</p>
                        <form >
                            <div className="form-group mb-3">
                                <label htmlFor="domainName" className="form-label">Domain Name <span className="text-danger">*</span></label>
                                <input type="text" id="domainName" className="form-control" placeholder="example.com" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="recordType" className="form-label">Record Type</label>
                                <select id="recordType" className="form-select">
                                    <option>A</option>
                                    <option>AAAA</option>
                                    <option>CNAME</option>
                                    <option>NS</option>
                                    <option>MX</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Purge Cache</button>
                        </form>
                    </div>

                </div>
            </div>
        </div >

    )
}
