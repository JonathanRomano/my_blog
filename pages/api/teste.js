function teste (request, response) {
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTSring()
    });
}

export default teste