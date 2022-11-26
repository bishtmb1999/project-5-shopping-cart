const data = req.body
        const userId = req.params.userId

        // check body validation
        if (vfy.isEmptyObject(data)) return unsuccess(res, 
            400, '😩 Post Body is empty, Please add some key-value pairs')

        // destructure data here
        let { productId, cartId, removeProduct } = data

        // basic validations
        // validate products
        if (vfy.isEmptyVar(productId)) return unsuccess(res, 400, '☹️ ProductId must be required!')
        if (!vfy.isValidObjectId(productId)) return unsuccess(res, 400, '☹️ Invalid ProductId!')
        // validate quantity
        if (isNaN(removeProduct)) return unsuccess(res, 400, '☹️ removeProduct must be required!')
        if (typeof removeProduct != 'number') return unsuccess(res, 400, '☹️ removeProduct must be a number!')
        // 👉 if you want, like removeProduct = 2 then remove quantity by 2 for that comment ⬇️ line
        if (removeProduct < 0 || removeProduct > 1) return unsuccess(res, 400, '☹️ removeProduct value is only 0 and 1 !')

        // is a valid id 
        if (!vfy.isValidObjectId(userId)) return unsuccess(res, 400, '☹️ Invalid userId !')