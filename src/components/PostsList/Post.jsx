import React from "react";

import styles from './Post.module.scss'

const Post = () => {

    return (
        <div className={styles.post}>
            <div className={styles.postImg}></div>
            <h2 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facere velit veritatis.</h2>
            <p className={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda delectus expedita in, natus nesciunt numquam qui rerum tempora totam ullam ut vero voluptatum. Ipsa, sed, sunt! Aliquam atque beatae blanditiis cum debitis ea enim facilis fuga harum, hic iure minus molestiae molestias nam neque nesciunt obcaecati officiis optio pariatur ratione repudiandae similique sint soluta veritatis voluptate voluptatem voluptates, voluptatum! Eos est libero nisi officiis sint, ullam voluptatem? Alias, architecto cupiditate dolor incidunt iure modi praesentium rem repellat sint veniam? Adipisci, amet, cum dolor error incidunt ipsa magnam maiores nemo, nostrum praesentium quaerat quidem quo rem voluptate voluptatem voluptatibus voluptatum. Accusamus, accusantium alias architecto at aut corporis cum cupiditate deleniti eos impedit nulla numquam provident quibusdam quisquam rerum, sequi sit temporibus voluptatibus. Asperiores beatae blanditiis debitis ea error esse et eum fugiat harum illum ipsa laboriosam magnam molestiae natus nihil nobis non nostrum odit officia pariatur placeat quo, quod quos reiciendis rerum tempore vel! Accusantium alias consequuntur error incidunt modi mollitia nam nemo nisi, pariatur quaerat quisquam tenetur velit voluptatem? Ad at atque enim error facere itaque minima modi, natus quo. Dolore eveniet explicabo nam, nihil quod ratione ut veniam. Accusantium ad aliquam at dignissimos harum natus quam veniam, voluptatem.</p>
            <div className={styles.postFooter}>
                <div className={styles.iconWrp}>
                    <div className={styles.postIcon}>likes</div>
                    <div className={styles.postIcon}>comm <br/> ents</div>
                </div>
                <div className={styles.postIcon}>time</div>
            </div>
        </div>
    )
}

export default Post