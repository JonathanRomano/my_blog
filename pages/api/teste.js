function teste (request, response) {
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toDateString()
    });
}

export default teste